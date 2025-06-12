import Announcement from "../../../models/announcement.model.js";

async function createAnnouncementController(req, res) {
  const {
    title,
    photo,
    description,
    quantity,
    size,
    weight,
    addressDeparture,
    addressDestination,
    length,
    width,
    depth,
    active,
  } = req.body;

  try {
    await Announcement.create({
      title: title,
      photo: photo,
      description: description,
      quantity: quantity,
      size: size,
      weight: weight,
      addressDeparture: addressDeparture,
      addressDestination: addressDestination,
      length: length,
      width: width,
      depth: depth,
      active: active,
    });
    return res.status(200).json({ message: "Annoucement created" });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default createAnnouncementController;
