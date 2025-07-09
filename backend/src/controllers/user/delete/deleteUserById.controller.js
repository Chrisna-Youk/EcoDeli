import User from "../../../models/user.model.js";

async function deleteUserByIdController(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    await user.destroy();

    return res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error("Erreur suppression utilisateur :", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

export default deleteUserByIdController;