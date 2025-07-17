import Checkpoint from "../../../models/checkpoint.model.js";

function toRad(value) {
  return (value * Math.PI) / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

async function readNearestCheckpointController(req, res) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res
        .status(400)
        .json({ data: { message: "Latitude et longitude requises." } });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);

    const checkpoints = await Checkpoint.findAll();

    let closestCheckpoint = null;
    let minDistance = Infinity;

    for (const checkpoint of checkpoints) {
      const distance = haversineDistance(
        latitude,
        longitude,
        checkpoint.latitude,
        checkpoint.longitude
      );

      if (distance > 20 && distance < minDistance) {
        minDistance = distance;
        closestCheckpoint = checkpoint;
      }
    }

    if (!closestCheckpoint) {
      return res
        .status(404)
        .json({ message: "Aucun checkpoint trouvé à plus de 20 km." });
    }

    return res.status(200).json({
      data: {
        checkpoint: closestCheckpoint,
        distance: minDistance.toFixed(2) + " km",
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readNearestCheckpointController;
