import Service from "../../../models/service.model.js";

async function readServiceByIdController(req, res) {
  const { serviceId } = req.params;

  try {
    const service = await Service.findOne({
      where: {
        id: serviceId,
      },
    });

    return res.status(200).json({ data: service });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readServiceByIdController;
