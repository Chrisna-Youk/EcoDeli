import Transport from "../../../models/transport.model.js";

async function createTransportController(req, res) {
  const {
    title,
    description,
    price,
    addressDeparture,
    addressDestination,
    date,
    time,
    type,
    userId,
    active,
  } = req.body;

  const photoPath = req.files?.photoTransport ? req.files.photoTransport[0].filename : null;

  try {
    await Transport.create({
      title,
      description,
      price,
      addressDeparture,
      addressDestination,
      date: date ? new Date(date) : null,
      time: time || null,
      type,
      userId: req.user.id,
      photo: photoPath,
      active,
    });

    return res.status(200).json({ message: "Transport créé avec succès." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createTransportController;
