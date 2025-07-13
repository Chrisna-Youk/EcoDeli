import Announcement from "../../../models/Announcement.model.js";

async function createAnnouncementController(req, res) {
  const {
    type,
    title,
    description,
    addressDeparture,
    addressDestination,
    date,
    time,
    price,
    places_available,
    active,
  } = req.body;

  const photoPath =
    req.files && req.files.photo && req.files.photo.length > 0
      ? req.files.photo[0].filename
      : null;

  try {
    // Vérifie si une annonce avec ce titre existe déjà pour cet utilisateur
    const existingAnnouncement = await Announcement.findOne({
      where: {
        userId: req.user.id,
        title: title,
      },
    });

    if (existingAnnouncement) {
      return res.status(409).json({ message: "Vous avez déjà une annonce avec ce titre." });
    }

    // Crée une nouvelle annonce en adaptant les champs
    await Announcement.create({
      userId: req.user.id,
      type,
      title,
      description,
      addressDeparture,
      addressDestination,
      date,
      time,
      price,
      places_available,
      active,
      photo: photoPath,
    });

    return res.status(200).json({ message: "Annonce créée avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création d'annonce:", error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createAnnouncementController;
