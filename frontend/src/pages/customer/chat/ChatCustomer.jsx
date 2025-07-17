import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useSocket } from "../../../utils/io";
import { useQuery } from "@tanstack/react-query";

const ChatCustomer = () => {
  const { customerId, providerId, serviceId } = useParams();
  const http = useAuth();
  const socket = useSocket();

  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [localMessages, setLocalMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { data: customerInfos } = useQuery({
    queryKey: ["customerInfos", customerId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${customerId}`);
      return response.data.data;
    },
  });

  const { data: providerInfos } = useQuery({
    queryKey: ["providerInfos", providerId],
    queryFn: async () => {
      const response = await http.get(`/user/read/${providerId}`);
      return response.data.data;
    },
  });

  const { data: serviceInfos } = useQuery({
    queryKey: ["serviceInfos", serviceId],
    queryFn: async () => {
      const response = await http.get(`/service/read/${serviceId}`);
      return response.data.data;
    },
  });

  useEffect(() => {
    const fetchOrCreateChat = async () => {
      try {
        const response = await http.post("/chat/create", {
          customerId,
          providerId,
          serviceId,
        });
        setChat(response.data.data);
      } catch (error) {
        console.error("Erreur création chat :", error);
      }
    };

    fetchOrCreateChat();
  }, [customerId, providerId, serviceId]);

  useEffect(() => {
    if (!chat?.id) return;

    const fetchMessages = async () => {
      try {
        const response = await http.get(`/message/read/${chat.id}`);
        setMessages(response.data.data);
      } catch (error) {
        console.error("Erreur lecture messages :", error);
      }
    };

    fetchMessages();
  }, [chat]);

  useEffect(() => {
    if (!socket || !chat?.id) return;

    socket.emit("joinRoom", chat.id);

    socket.on("newMessage", (message) => {
      setLocalMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket, chat?.id]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const messagePayload = {
      content: newMessage,
      chatId: chat.id,
      userId: customerId,
      type: "message",
    };

    socket.emit("sendMessage", messagePayload);
    setNewMessage("");
  };

  const handleAcceptOffer = async (msg) => {
    try {
      const payload = {
        price: msg.price,
        date: msg.dueDate,
        serviceId,
        customerId,
        providerId,
        customerfirstName: customerInfos?.firstName,
        customerlastName: customerInfos?.lastName,
        providerfirstName: providerInfos?.firstName,
        providerlastName: providerInfos?.lastName,
        serviceTitle: serviceInfos?.title,
      };
      console.log("Payload envoyé à Stripe:", payload);
      const res = await http.post(`/payement/service/create`, payload);
      await http.post(`/order/create/`, payload);
      window.location.href = res.data.data.url;
    } catch (error) {
      console.error("Erreur lors de la redirection vers Stripe :", error);
      alert("Erreur lors de la mise en place du paiement.");
    }
  };

  const allMessages = [...messages, ...localMessages];

  return (
    <div className="max-w-2xl mx-auto p-4 h-150 flex flex-col">
      <div className="text-lg font-semibold mb-4">Chat</div>
      <div className="text-md text-yellow-600 mb-4">
        Annonce : {serviceInfos?.title}
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-yellow-50 rounded-md border border-yellow-300">
        {allMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.userId == customerId ? "justify-end" : "justify-start"
            }`}
          >
            {msg?.type === "offer" ? (
              <div className="px-4 py-2 rounded-lg max-w-xs bg-yellow-100 text-yellow-800">
                {msg.content}
                {msg.price && (
                  <div>
                    <div className="text-sm mt-1">
                      💰 {msg.price} € – 📅{" "}
                      {new Date(msg.dueDate).toLocaleDateString()}
                    </div>
                    <button
                      onClick={() => handleAcceptOffer(msg)}
                      className="mt-2 text-sm text-green-600 hover:underline"
                    >
                      ✅ Accepter l'offre
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.userId == customerId
                    ? "bg-blue-100 text-blue-700"
                    : "bg-orange-200 text-gray-700"
                }`}
              >
                {msg.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-primary-100 text-primary-700 px-4 py-2 rounded-md hover:bg-primary-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatCustomer;
