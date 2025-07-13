import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useSocket } from "../../../utils/io";

const ChatCustomer = () => {
  const { customerId, providerId } = useParams();
  const http = useAuth();
  const socket = useSocket();

  const [localMessages, setLocalMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

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

  // WebSocket
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

  // Combine messages
  const allMessages = [...messages, ...localMessages];

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

  return (
    <div className="max-w-2xl mx-auto p-4 h-150 flex flex-col">
      <div className="text-lg font-semibold mb-4">Chat</div>

      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-100 rounded-md">
        {allMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.userId == customerId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.userId == customerId
                  ? "bg-blue-100 text-blue-700"
                  : "bg-white text-gray-700"
              }`}
            >
              {msg.content}
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
    </div>
  );
};

export default ChatCustomer;
