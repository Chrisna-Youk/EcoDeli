import Service from "../../../models/service.model.js";

async function createServiceController(req, res) {
  const { 
    title, 
    description, 
    price, 
    city,
    city_end, 
    postalCode, 
    categoryId, 
    type, 
    userId 
  } = req.body;

  const photoPath = req.files?.photoService ? req.files.photoService[0].filename : null;

  try {
    const existingService = await Service.findOne({
      where: {
        userId: userId,
        title: title,
      },
    });

    if (existingService) {
      return res
        .status(409)
        .json({ message: "Vous avez déjà un service avec ce titre." });
    }

    await Service.create({
      title: title,
      description: description,
      price: price,
      city: city,
      postalCode: postalCode,
      categoryId: categoryId,
      photo: photoPath,
      userId: userId,
      type: type,
      city_end: city_end, 
    });

    return res.status(200).json({ message: "Service créé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création du service:", error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createServiceController;
