import Announcement from "../../../models/announcement.model.js";
import Category from "../../../models/category.model.js";
import User from "../../../models/user.model.js";

async function readAnnouncementByIdController(req, res) {
  const { announcementId } = req.params;

  try {
    const annoucement = await Announcement.findOne({
      where: {
        id: announcementId,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "photo", "role", "firstName", "lastName"],
        },
      ],
    });
    return res.status(200).json({ data: annoucement });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ data: "Erreur server" });
  }
}

export default readAnnouncementByIdController;
