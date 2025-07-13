import Chat from "../../../models/chat.model.js";
import User from "../../../models/user.model.js";
import Service from "../../../models/service.model.js";

async function readChatsByCustomerIdController(req, res) {
  const { customerId } = req.params;
  try {
    const chats = await Chat.findAll({
      where: { customerId: customerId },
      include: [
        {
          model: Service,
          as: "service",
          attributes: ["title", "createdAt"],
        },
        {
          model: User,
          as: "provider",
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    res.status(200).json({ data: chats });
  } catch (error) {
    console.error("Erreur récupération chats :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}

export default readChatsByCustomerIdController;
