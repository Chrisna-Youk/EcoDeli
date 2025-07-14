import Review from "../../../models/review.model.js";

async function createReviewController(req, res) {
  const {
    grade,
    userId,
  } = req.body;

  try {
    await Review.create({
      userId: userId,
      grade: grade
    });

    return res.status(200).json({ message: "Avis crée avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création de l'avis:", error);
    return res.status(500).json({ message: "Erreur serveur." });
  }
}

export default createReviewController;
