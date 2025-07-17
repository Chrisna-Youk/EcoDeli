import Checkpoint from "../../../models/checkpoint.model.js";

function toRad(value) {
  return (value * Math.PI) / 180;
}

// Methode de Haversine qui permet de récuprer
// des points sur un rayon en fonction de 2 points

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

async function readNearestCheckpointsController(req, res) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res
        .status(400)
        .json({ message: "Latitude et longitude requises." });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);

    const checkpoints = await Checkpoint.findAll();

    const distances = checkpoints
      .map((cp) => {
        const dist = haversineDistance(
          latitude,
          longitude,
          cp.latitude,
          cp.longitude
        );
        return {
          ...cp.toJSON(),
          distance: dist,
        };
      })
      .filter((cp) => cp.distance > 20)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    if (distances.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun checkpoint trouvé à plus de 20 km." });
    }

    return res.status(200).json({
      data: distances.map((cp) => ({
        id: cp.id,
        address: cp.address,
        latitude: cp.latitude,
        longitude: cp.longitude,
        distance: cp.distance.toFixed(2) + " km",
      })),
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readNearestCheckpointsController;
