import Announcement from "../../../models/announcement.model.js";

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

  console.log(req.body);

  try {
    await Announcement.create({
      userId: userId,
      type: type,
      title: title,
      description: description,
      addressDeparture: addressDeparture,
      preciseAddressDeparture: preciseAddressDeparture,
      addressDestination: addressDestination,
      preciseAddressDestination: preciseAddressDestination,
      date: date,
      weight: weight,
      length: length,
      width: width,
      depth: depth,
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
