import Chat from "../../../models/chat.model.js";

async function readChatByUserIdController(req, res) {
  const { customerId, providerId, serviceId } = req.params;

  try {
    const chat = await Chat.findOne({
      where: {
        customerId: customerId,
        providerId: providerId,
        serviceId: serviceId,
      },
    });

    return res.status(200).json({ data: chat });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readChatByUserIdController;
