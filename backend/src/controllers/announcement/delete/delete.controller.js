import Announcement from "../../../models/Announcement.model.js";

async function deleteAnnouncementController(req, res) {
  const { id } = req.body;

  try {
    await Announcement.destroy({ where: { id: id } });
    return res.status(200).json({ message: "Annoucement deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default deleteAnnouncementController;
