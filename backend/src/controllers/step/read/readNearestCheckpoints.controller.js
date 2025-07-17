import Checkpoint from "../../../models/checkpoint.model.js";
import { Op } from "sequelize";

async function readNearestCheckpointsController(req, res) {
  try {
    const { latA, lonA, latB, lonB } = req.body;

    const latMin = Math.min(latA, latB);
    const latMax = Math.max(latA, latB);
    const lonMin = Math.min(lonA, lonB);
    const lonMax = Math.max(lonA, lonB);

    const checkpoints = await Checkpoint.findAll({
      where: {
        latitude: { [Op.between]: [latMin, latMax] },
        longitude: { [Op.between]: [lonMin, lonMax] },
      },
    });

    return res.status(200).json({ data: checkpoints });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readNearestCheckpointsController;
