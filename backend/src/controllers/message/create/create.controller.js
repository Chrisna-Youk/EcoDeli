import Message from "../../../models/message.model.js";

async function createMessageController(req, res) {
  const { userId, content } = req.body;

  try {
    await Message.create({
      userId: userId,
      content: content,
    });
    return res.status(200).json({ data: "Message created" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default createMessageController;
