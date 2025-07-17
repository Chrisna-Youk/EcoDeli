import Step from "../../../models/step.model.js";
import User from "../../../models/user.model.js";

async function readStepsByCheckpointIdController(req, res) {
  const { checkpointId } = req.params;
  try {
    const steps = await Step.findAll({
      where: { checkpointId: checkpointId },
      include: [
        {
          model: User,
          as: "provider",
          attributes: ["firstName", "lastName"],
        },
      ],
    });
    return res.status(200).json({ data: steps });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readStepsByCheckpointIdController;
