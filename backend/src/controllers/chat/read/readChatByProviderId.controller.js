import Chat from "../../../models/chat.model.js";

async function readChatsByProviderIdController(req, res) {
  const { providerId } = req.params;

  console.log(req.params);

  try {
    const chats = await Chat.findAll({
      where: {
        providerId: providerId,
      },
    });

    return res.status(200).json({ data: chats });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readChatsByProviderIdController;
