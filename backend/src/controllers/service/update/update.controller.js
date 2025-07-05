import Service from "../../../models/service.model.js";

async function updateServiceController(req, res) {
  const { serviceId } = req.params;
  const body = req.body;

  // console.log(body);

  // req.files !== null
  //   ? console.log(req.files.photoService[0].filename)
  //   : console.log("Nope");

  try {
    const service = await Service.findOne({ where: { id: serviceId } });
    await service.update({
      title: body.title,
      description: body.description,
      price: body.price,
      city: body.city,
      postalCode: body.postalCode,
      categoryId: body.categoryId,
      photo: req.files?.photoService?.[0]?.filename || service.photo,
    });
    return res.status(200).json({ message: service });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default updateServiceController;
