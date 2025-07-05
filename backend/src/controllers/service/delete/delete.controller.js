import Service from "../../../models/service.model.js";

async function deleteServiceController(req, res) {
  const { id } = req.body;

  try {
    await Service.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Service deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default deleteServiceController;
