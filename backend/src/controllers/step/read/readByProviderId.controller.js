import Step from "../../../models/step.model.js";

async function readStepsByProviderIdController(req, res) {
  try {
    const steps = await Step.findAll({
      where: { providerId: req.user.id },
    });
    return res.status(200).json({ data: steps });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readStepsByProviderIdController;
