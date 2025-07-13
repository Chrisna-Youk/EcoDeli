import Service from "../../../models/service.model.js";

async function readServiceController(req, res) {

  const limit = Number(req.query.limit) || 100;
  const offset = Number(req.query.offset) || 0;

  try {
    const services = await Service.findAll({ limit, offset });

    return res.status(200).json({ data: services });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readServiceController;
