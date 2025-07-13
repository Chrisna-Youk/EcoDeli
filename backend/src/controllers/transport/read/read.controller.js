import Transport from "../../../models/transport.model.js";

async function readTransportController(req, res) {
  const limit = Number(req.query.limit) || 100;
  const offset = Number(req.query.offset) || 0;

  try {
    const transports = await Transport.findAll({ limit, offset });

    return res.status(200).json({ data: transports });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readTransportController;
