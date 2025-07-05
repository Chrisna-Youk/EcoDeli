import Papers from "../../../models/papers.model.js";

async function updatePapersController(req, res) {
  const { userId } = req.params;
  try {
    const [userPapers, created] = await Papers.findOrCreate({
      where: { userId: userId },
      defaults: {
        userId: userId,
      },
    });

    const documents = req.files;

    const idCard = documents.idCard?.[0]?.path;
    const driverLicense = documents.driverLicense?.[0]?.path;
    const profilePhoto = documents.profilePhoto?.[0]?.path;

    await userPapers.update({
      idCard,
      driverLicense,
      profilePhoto,
    });

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "BAD" });
  }
}

export default updatePapersController;
