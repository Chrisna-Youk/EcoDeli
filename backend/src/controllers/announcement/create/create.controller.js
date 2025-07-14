import Announcement from "../../../models/announcement.model.js";

async function createAnnouncementController(req, res) {
  const {
    type,
    title,
    description,
    cityDeparture,
    cityDestination,
    latDeparture,
    lonDeparture,
    latDestination,
    lonDestination,
    date,
    weight,
    length,
    width,
    depth,
    userId,
    active,
  } = req.body;

  const photoPath = req.files?.photoDelivery
    ? req.files.photoDelivery[0].filename
    : null;

  const announcementAlreadyExists = await Announcement.findOne({
    where: {
      type,
      title,
      userId,
      cityDeparture,
      cityDestination,
    },
  });

  if (announcementAlreadyExists) {
    return res
      .status(400)
      .json({ message: "Une annonce identique existe déjà." });
  }

  try {
    await Announcement.create({
      userId: userId,
      type: type,
      title: title,
      description: description,
      cityDeparture: cityDeparture,
      cityDestination: cityDestination,
      latDeparture: latDeparture,
      lonDeparture: lonDeparture,
      latDestination: latDestination,
      lonDestination: lonDestination,
      date: date,
      weight: weight || 0.0,
      length: length || 0,
      width: width || 0,
      depth: depth || 0,
      photo: photoPath,
      active: active ?? 1,
    });

    return res.status(200).json({ message: "Annonce créée avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création d'annonce:", error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createAnnouncementController;
