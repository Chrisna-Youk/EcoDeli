import { sendEmail } from "../../../emails/transporter.js";
import Announcement from "../../../models/announcement.model.js";
import Step from "../../../models/step.model.js";
import User from "../../../models/user.model.js";

async function refreshStatusController(req, res) {
  const { status, stepUuid, announcementId, count } = req.body;

  try {
    const stepToUpdate = await Step.findOne({
      where: {
        uuid: stepUuid,
      },
    });

    stepToUpdate.update({
      status: status,
    });

    const stepAfter = await Step.findOne({
      where: {
        announcementId: announcementId,
        count: count + 1,
      },
    });

    if (stepAfter != null) {
      try {
        const announcement = await Announcement.findOne({
          where: {
            id: announcementId,
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: ["email"],
            },
          ],
        });
        stepAfter.update({
          status: "En attente",
        });

        try {
          sendEmail(
            `EcoDeli ${process.env.SMTP_EMAIL}`,
            announcement.user.email,
            "EcoDeli Code Verification",
            `Hello there is the code for the deliverer ${stepAfter.code}`
          );
        } catch (error) {
          console.error("Email sending failed:", error.message);
        }
        console.log(announcement);
        return res.status(200).json({
          data: { message: "Livraison finie !", data: stepToUpdate },
        });
      } catch (error) {
        console.error("Error :", error.message);
        return res.status(500).json({ message: "Erreur Announcement serveur" });
      }
    }

    return res.status(200).json({
      data: { message: "Step update successfully", data: stepToUpdate },
    });
  } catch (error) {
    console.error("Error :", error.message);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

export default refreshStatusController;
