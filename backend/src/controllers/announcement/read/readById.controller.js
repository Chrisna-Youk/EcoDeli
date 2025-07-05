import Announcement from "../../../models/announcement.model.js";

async function readAnnouncementByIdController(req, res) {
  const { id } = req.query;

  try {
    const annoucement = await Announcement.findAll({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ message: annoucement });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readAnnouncementByIdController;
