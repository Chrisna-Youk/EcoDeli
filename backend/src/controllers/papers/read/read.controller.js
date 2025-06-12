import Papers from "../../../models/papers.model.js";

async function readPapersController(req, res) {
  try {
    const { userId } = req.params;
    const userPapers = Papers.findOne({ where: { id: userId } });
    return res.status(200).json({ data: userPapers });
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export default readPapersController;
