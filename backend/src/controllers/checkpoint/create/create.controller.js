import axios from "axios";

import Checkpoint from "../../../models/checkpoint.model.js";

async function createCheckpointController(req, res) {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ data: { message: "Adresse requise" } });
  }

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: address,
          format: "json",
          addressdetails: 1,
          limit: 1,
        },
        headers: {
          "User-Agent": "ecodeli/1.0.0 (contact@ecodeli.com)",
        },
      }
    );

    const data = response.data;
    console.log(data);
    if (!data || data.length === 0) {
      return res
        .status(404)
        .json({ data: { message: "Adresse introuvable." } });
    }

    const latitude = parseFloat(data[0].lat);
    const longitude = parseFloat(data[0].lon);
    console.log(data[0].address);

    const checkpoint = await Checkpoint.findOne({
      where: { address: address },
    });

    if (checkpoint) {
      console.log(checkpoint);
      return res
        .status(400)
        .json({ data: { message: "Checkpoint déjà existant" } });
    } else {
      console.log(checkpoint);
      await Checkpoint.create({
        address: address,
        city:
          data[0].address.city ||
          data[0].address.town ||
          data[0].address.municipality ||
          data[0].address.county,
        longitude: Number(longitude),
        latitude: Number(latitude),
      });
      return res.status(201).json({
        data: { message: "Checkpoint créé avec succès.", data: checkpoint },
      });
    }
  } catch (error) {
    console.error("Erreur de géocodage :", error.message);
    return res
      .status(500)
      .json({ message: "Erreur serveur pendant le géocodage." });
  }
}

export default createCheckpointController;
