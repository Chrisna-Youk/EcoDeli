import Step from "../../../models/step.model.js";

async function createStepController(req, res) {
    console.log(req.body    )
  try {
    return res.status(200).json({
      data: "data",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur serveur", error: error.message });
  }
}

export default createStepController;
