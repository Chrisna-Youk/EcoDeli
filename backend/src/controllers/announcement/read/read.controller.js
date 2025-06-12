import Announcement from "../../../models/announcement.model.js";

async function readAnnouncementController(req, res) {
  const { limit, offset } = req.query;

  try {
    const annoucements = await Announcement.findAll({
      limit: limit,
      offset: offset,
    });
    return res.status(200).json({ message: annoucements });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readAnnouncementController;
