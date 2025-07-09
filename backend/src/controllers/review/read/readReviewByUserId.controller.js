import Review from "../../../models/review.model.js";

async function readReviewByUserIdController(req, res) {
  try {
    const { userId } = req.params;
    const reviews = await Review.findAll({ where: { userId: userId } });
    res.status(200).json({ data: reviews });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}

export default readReviewByUserIdController;
