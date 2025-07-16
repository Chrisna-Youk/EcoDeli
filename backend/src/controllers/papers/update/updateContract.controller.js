import Papers from "../../../models/papers.model.js";

async function updateContractController(req, res) {
  const { userId } = req.params;
  const documents = req.files;

  const contract = documents?.contract?.[0]?.filename || null;
  

  try {
    const [userPapers, created] = await Papers.findOrCreate({
      where: { userId },
      defaults: {
        userId,
        contract,
      },
    });

    if (!created) {
      await userPapers.update({
        contract,
      });
    }

    return res.status(200).json({
      message: created ? "Contract created" : "Contract updated",
      data: userPapers,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error updating contract", error: error.message });
  }
}

export default updateContractController;
