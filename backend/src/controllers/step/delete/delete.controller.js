import Announcement from "../../../models/announcement.model.js";
import Step from "../../../models/step.model.js";

async function cancelStepController(req, res) {
  const { stepUuid } = req.params;

  try {
    const step = await Step.findOne({
      where: { uuid: stepUuid },
    });

    const announcement = await Announcement.findOne({
      where: { id: step.announcementId },
    });

    announcement.update({
      latDeparture: step.latDestination,
      lonDeparture: step.lonDestination,
    });

    await step.destroy();

    console.log(announcement);
    return res
      .status(200)
      .json({ data: { message: "Step canceled", step: "step" } });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default cancelStepController;
