import Papers from "../../../models/papers.model.js";

async function readPapersController(req, res) {
  try {
    const { userId } = req.params;

    const userPapers = await Papers.findOne({ where: { userId: userId } });

    if (!userPapers) {
      return res.status(404).json({ message: "Aucun document trouvé." });
    }

    return res.status(200).json({ data: userPapers });
  } catch (error) {
    console.error("Erreur lors de la lecture des documents :", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

export default readPapersController;
