import Transport from "../../../models/transport.model.js";

async function createTransportController(req, res) {
  const {
    title,
    description,
    cityDeparture,
    cityDestination,
    addressDeparture,
    addressDestination,
    preciseAddressDeparture,
    preciseAddressDestination,
    date,
    time,
    type,
    userId,
    price,
    photo,
  } = req.body;

  const photoPath = req.files?.photoTransport?.[0]?.filename || null;

  try {
    await Transport.create({
      title,
      description,
      cityDeparture,
      cityDestination,
      addressDeparture: addressDeparture || null,
      addressDestination: addressDestination || null,
      preciseAddressDeparture: preciseAddressDeparture || null,
      preciseAddressDestination: preciseAddressDestination || null,
      date: date ? new Date(date) : null,
      time: time || null,
      type,
      userId,
      photo: photoPath,
      active: true,
      price: price,
      photo: photoPath,
    });

    return res.status(200).json({ message: "Annonce de transport créée avec succès." });
  } catch (error) {
    console.error("[createTransportController]", error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createTransportController;
