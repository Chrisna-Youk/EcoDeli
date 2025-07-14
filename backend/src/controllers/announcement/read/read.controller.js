import Announcement from "../../../models/announcement.model.js";

async function readAnnouncementController(req, res) {
  const { limit, offset } = req.query;

  try {
    const annoucements = await Announcement.findAll({
      limit: Number(limit),
      offset: Number(offset),
    });
    console.log(annoucements)
    return res.status(200).json({ data: annoucements });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readAnnouncementController;
