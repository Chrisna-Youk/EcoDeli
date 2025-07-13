import Papers from "../../../models/papers.model.js";

async function updatePapersController(req, res) {
  const { userId } = req.params;
  const { siret } = req.body;
  const { role_requested } = req.body;
  const { request_status } = req.body;
  const { provider_category } = req.body;
  const documents = req.files;

  const idCard = documents?.idCard?.[0]?.filename || null;
  const driverLicense = documents?.driverLicense?.[0]?.filename || null;
  const profilePhoto = documents?.profilePhoto?.[0]?.filename || null;
  const pricesDocument = documents?.pricesDocument?.[0]?.filename || null;


  try {
    const [userPapers, created] = await Papers.findOrCreate({
      where: { userId },
      defaults: {
        userId,
        idCard,
        driverLicense,
        pricesDocument,
        profilePhoto,
        siret,
        role_requested,
        provider_category,
        request_status,
      },
    });

    if (!created) {
      await userPapers.update({
        idCard,
        driverLicense,
        profilePhoto,
        siret,
        role_requested,
        pricesDocument,
        provider_category,
        request_status,
      });
    }

    return res.status(200).json({
      message: created ? "Created" : "Updated",
      data: userPapers,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "BAD", error: error.message });
  }
}

export default updatePapersController;
