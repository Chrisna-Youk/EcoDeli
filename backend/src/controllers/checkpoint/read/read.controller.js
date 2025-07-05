import Checkpoint from "../../../models/checkpoint.model.js";

async function readCheckpointController(req, res) {
  const checkpoints = await Checkpoint.findAll();

  return res.status(200).json({ data: checkpoints });
}

export default readCheckpointController;
