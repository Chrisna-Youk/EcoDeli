import Transport from "../../../models/transport.model.js";

async function readTransportByIdController(req, res) {
  const { transportId } = req.params;

  try {
    const transport = await Transport.findOne({
      where: {
        id: transportId,
      },
    });

    return res.status(200).json({ data: transport });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readTransportByIdController;
