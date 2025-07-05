import axios from "axios";

import Checkpoint from "../../../models/checkpoint.model.js";

async function createCheckpointController(req, res) {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ message: "Adresse requise." });
  }

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: address,
          format: "json",
          limit: 1,
        },
        headers: {
          "User-Agent": "ecodeli/1.0.0 (contact@ecodeli.com)",
        },
      }
    );

    const data = response.data;

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Adresse introuvable." });
    }

    const latitude = parseFloat(data[0].lat);
    const longitude = parseFloat(data[0].lon);

    const [alreadyExists, created] = await Checkpoint.findOrCreate({
      where: { longitude: longitude, latitude: latitude },
      default: { address: address, longitude: longitude, latitude: latitude },
    });

    if (alreadyExists) {
      return res.status(400).json({ message: "Checkpoint déjà existant" });
    }

    if (created) {
      return res
        .status(201)
        .json({ message: "Checkpoint créé avec succès.", checkpoint });
    }
  } catch (error) {
    console.error("Erreur de géocodage :", error.message);
    return res
      .status(500)
      .json({ message: "Erreur serveur pendant le géocodage." });
  }
}

export default createCheckpointController;
