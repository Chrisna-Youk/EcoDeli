import Service from "../../../models/service.model.js";

async function readServiceController(req, res) {
  const { limit, offset } = req.query;

  try {
    const services = await Service.findAll({
      limit: limit,
      offset: offset,
    });
    return res.status(200).json({ message: services });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readServiceController;
