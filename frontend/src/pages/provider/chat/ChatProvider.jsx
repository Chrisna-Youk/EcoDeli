import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useSocket } from "../../../utils/io";

const ChatProvider = () => {
  const { customerId, providerId } = useParams();
  const http = useAuth();
  const socket = useSocket();

  const [localMessages, setLocalMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [offerDueDate, setOfferDueDate] = useState("");

  const { data: chat } = useQuery({
    queryKey: ["Chat", customerId, providerId],
    queryFn: async () => {
      const response = await http.get(`/chat/read/${customerId}/${providerId}`);
      return response.data.data;
    },
  });

  const { data: messages = [] } = useQuery({
    enabled: !!chat?.id,
    queryKey: ["Messages", chat?.id],
    queryFn: async () => {
      const response = await http.get(`/message/read/${chat?.id}`);
      return response.data.data;
    },
  });

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

  const allMessages = [...messages, ...localMessages];

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const messagePayload = {
      content: newMessage,
      chatId: chat.id,
      userId: providerId,
      type: "message",
    };

    socket.emit("sendMessage", messagePayload);
    setNewMessage("");
  };

  const handleSendOffer = () => {
    if (!offerPrice || !offerDueDate) return;

    const offerPayload = {
      content: `Offre : ${offerPrice}€ - à livrer pour ${offerDueDate}`,
      chatId: chat.id,
      userId: providerId,
      type: "offer",
      price: parseInt(offerPrice),
      dueDate: offerDueDate,
    };

    socket.emit("sendMessage", offerPayload);
    setOfferPrice("");
    setOfferDueDate("");
  };

  return (
    <div className="w-2xl mx-auto p-4 h-150 flex flex-col">
      <div className="text-lg font-semibold mb-4">Chat</div>

      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-yellow-50 rounded-md border border-yellow-300">
        {allMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.userId == providerId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.type === "offer"
                  ? "bg-yellow-100 text-yellow-800"
                  : msg.userId == providerId
                  ? "bg-blue-100 text-blue-700"
                  : "bg-orange-200 text-gray-700"
              }`}
            >
              {msg.content}
              {msg.type === "offer" && msg.price && (
                <div className="text-sm mt-1">
                  💰 {msg.price} € – 📅{" "}
                  {new Date(msg.dueDate).toLocaleDateString()}
                  <Link to={"Stripe"}>Accepter</Link>
                </div>
              )}
            </div>
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

      {/* Offer form */}
      <div className="mt-6 p-4 bg-gray-50 border rounded-md">
        <div className="text-md font-semibold mb-2">Envoyer une offre</div>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Prix (€)"
            className="w-32 px-2 py-1 border border-gray-300 rounded"
            value={offerPrice}
            onChange={(e) => setOfferPrice(e.target.value)}
          />
          <input
            type="date"
            className="px-2 py-1 border border-gray-300 rounded"
            value={offerDueDate}
            onChange={(e) => setOfferDueDate(e.target.value)}
          />
          <button
            onClick={handleSendOffer}
            className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          >
            Envoyer l'offre
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatProvider;
