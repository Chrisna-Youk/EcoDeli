import Papers from "../../../models/papers.model.js";

async function createPapersController(req, res) {
  const { userId } = req.params;
  const { siret, role_requested, request_status, provider_category } = req.body;
  const documents = req.files;

  const idCard = documents?.idCard?.[0]?.filename || null;
  const driverLicense = documents?.driverLicense?.[0]?.filename || null;
  const profilePhoto = documents?.profilePhoto?.[0]?.filename || null;
  const pricesDocument = documents?.pricesDocument?.[0]?.filename || null;

  try {
    const existing = await Papers.findOne({ where: { userId } });

    if (existing) {
      return res.status(400).json({
        message: "Une demande existe déjà pour cet utilisateur.",
      });
    }

    const newPapers = await Papers.create({
      userId,
      idCard,
      driverLicense,
      pricesDocument,
      profilePhoto,
      siret,
      role_requested,
      provider_category,
      request_status,
    });

    return res.status(201).json({
      message: "Créé avec succès",
      data: newPapers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
}

export default createPapersController;
