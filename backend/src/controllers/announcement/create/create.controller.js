import Announcement from "../../../models/Announcement.model.js";

async function createAnnouncementController(req, res) {
  const {
    type,
    title,
    description,
    addressDeparture,
    preciseAddressDeparture,
    addressDestination,
    preciseAddressDestination,
    date,
    weight,
    length,
    width,
    depth,
    userId,
    active,
  } = req.body;

  const photoPath = req.files?.photoDelivery ? req.files.photoDelivery[0].filename : null;

  try {
    await Announcement.create({
      userId: req.user?.id || userId,
      type,
      title,
      description,
      addressDeparture,
      preciseAddressDeparture,
      addressDestination,
      preciseAddressDestination,
      date,
      weight,
      length,
      width,
      depth,
      photo: photoPath,
      active: active ?? 1, // valeur par défaut à 1 si non fournie
    });

    return res.status(200).json({ message: "Annonce créée avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création d'annonce:", error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createAnnouncementController;
