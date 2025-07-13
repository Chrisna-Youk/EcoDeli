import { Server } from "socket.io";
import { corsOptions } from "../middlewares/basics/cors.middleware.js";
import Message from "../models/message.model.js";

export default function websocketInit(server) {
  const io = new Server(server, corsOptions);

  io.on("connection", (socket) => {
    console.log("Socket connecté :", socket.id);

    socket.on("joinRoom", (chatId) => {
      console.log("Rejoint la room :", chatId);
      socket.join(chatId);
    });

    socket.on("sendMessage", async (data) => {
      console.log("Message reçu :", data);
      // Ici, tu peux appeler ta DB pour save
      await Message.create({
        userId: data.userId,
        chatId: data.chatId,
        content: data.content,
      });
      io.to(data.chatId).emit("newMessage", data); // broadcast à la room
    });

    socket.on("disconnect", () => {
      console.log("Socket déconnecté :", socket.id);
    });
  });
}
