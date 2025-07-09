import Service from "../../../models/service.model.js";

async function readServiceController(req, res) {
  const { limit, offset } = req.query;

  try {
    const services = await Service.findAll({
      limit: Number(limit),
      offset: Number(offset),
    });
    return res.status(200).json({ data: services });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readServiceController;
