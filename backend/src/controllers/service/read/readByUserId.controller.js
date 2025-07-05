import Service from "../../../models/service.model.js";

async function readServiceByUserIdController(req, res) {
  const { userId } = req.params;

  try {
    const services = await Service.findAll({
      where: {
        userId: userId,
      },
    });
    return res.status(200).json({ data: services });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default readServiceByUserIdController;
