import Step from "../../../models/step.model.js";

async function readByAnnouncementIdController(req, res) {
  const { announcementId } = req.params;
  try {
    const steps = await Step.findAll({
      where: { announcementId: announcementId },
    });
    return res.status(200).json({ data: steps });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readByAnnouncementIdController;
