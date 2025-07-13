import Chat from "../../../models/chat.model.js";

async function readChatByUserIdController(req, res) {
  const { customerId, providerId } = req.params;

  console.log(req.params);

  try {
    const chat = await Chat.findOne({
      where: {
        customerId: customerId,
        providerId: providerId,
      },
    });

    return res.status(200).json({ data: chat });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readChatByUserIdController;
