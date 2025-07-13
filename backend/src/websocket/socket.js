import { Server } from "socket.io";
import { corsOptions } from "../middlewares/basics/cors.middleware.js";
import Message from "../models/message.model.js";

export default function websocketInit(server) {
  const io = new Server(server, corsOptions);

  io.on("connection", (socket) => {
    socket.on("joinRoom", (chatId) => {
      console.log("Rejoint la room :", chatId);
      socket.join(chatId);
    });

    socket.on("sendMessage", async (data) => {
      await Message.create({
        userId: data.userId,
        chatId: data.chatId,
        content: data.content,
        type: data.type,
      });

      io.to(data.chatId).emit("newMessage", data);
    });

    socket.on("disconnect", () => {
      console.log("Un utilisateur s'est déconnecté.");
    });
  });
}
