import Papers from "../../../models/papers.model.js";

async function readPapersAllController(req, res) {
  try {
    const users = await Papers.findAll();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ error: error.message || "Bad request" });
  }
}

export default readPapersAllController;


  