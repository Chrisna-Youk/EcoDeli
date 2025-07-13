import Transport from "../../../models/transport.model.js";

async function deleteTransportController(req, res) {
  const { id } = req.body;

  try {
    await Transport.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Transport deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default deleteTransportController;
