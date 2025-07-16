import stripe from "../../../stripe/stripe.js";
import Subscription from "../../../models/subscription.model.js";

async function paySubscriptionController(req, res) {
  const { session_id } = req.body;
  if (!session_id) {
    return res.status(400).json({ error: "session_id manquant" });
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (err) {
    console.error("Session Stripe invalide :", err);
    return res.status(400).json({ error: "Session Stripe invalide." });
  }

  // Pour un abonnement, Stripe met session.mode === "subscription"
  // et session.payment_status devient "paid" à la première facture.
  if (session.mode !== "subscription" || session.payment_status !== "paid") {
    return res.status(402).json({ error: "Paiement non confirmé." });
  }

  // Empêche le double‐traitement
  const exists = await Subscription.findOne({
    where: { sessionId: session.id },
  });
  if (exists) {
    return res
      .status(409)
      .json({ error: "Cette session a déjà été traitée." });
  }

  // Récupère les données passées en metadata lors de la création de session
  const m = session.metadata;
  try {
    const newSub = await Subscription.create({
      sessionId: session.id,                // --> N’oublie pas d’ajouter ce champ unique à ton modèle
      name: m.subscriptionType || "Starter",
      type: m.subscriptionType || "Starter",
      insurance: null,                      // ou m.insurance si tu l’as mis en metadata
      soldDelivery: null,
      soldPrice: session.amount_total / 100,
      priority: null,
      active: true,
    });

    return res
      .status(201)
      .json({ message: "Souscription enregistrée", data: newSub });
  } catch (err) {
    console.error("Erreur création souscription :", err);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}

export default paySubscriptionController;
