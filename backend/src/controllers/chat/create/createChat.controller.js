import Chat from "../../../models/chat.model.js";

async function createChatController(req, res) {
  const { customerId, providerId, serviceId } = req.body;

  try {
    const existingChat = await Chat.findOne({
  where: {
    customerId,
    providerId,
    serviceId,
  },
});

    if (existingChat) {
      return res.status(200).json({ data: existingChat });
    }

    const newChat = await Chat.create({
      customerId,
      providerId,
      serviceId,
    });

    return res.status(200).json({ data: newChat });
  } catch (error) {
    console.error("Erreur lors de la création du chat:", error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default createChatController;
