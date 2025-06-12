import Announcement from "../../../models/announcement.model.js";

async function updateAnnouncementController(req, res) {
  const { id } = req.query;
  const body = req.body;

  try {
    const announcement = await Announcement.find({ where: { id: id } });
  } catch (error) {}
}

export default updateAnnouncementController;
