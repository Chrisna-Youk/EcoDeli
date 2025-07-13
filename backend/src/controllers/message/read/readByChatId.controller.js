import Message from "../../../models/message.model.js";

async function readMessageByChatIdController(req, res) {
  const { chatId } = req.params;

  try {
    const messages = await Message.findAll({
      where: {
        chatId: chatId,
      },
    });
    return res.status(200).json({ data: messages });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readMessageByChatIdController;
