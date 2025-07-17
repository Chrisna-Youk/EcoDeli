import stripe from "../../../stripe/stripe.js";
import axios from "axios";

async function createOfferPaymentController(req, res) {
  try {
    const { price, dueDate, providerId, customerId, serviceTitle } = req.body;

    if (!price || !providerId || !customerId) {
      return res.status(400).json({ error: "Données manquantes" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Offre de service : ${serviceTitle || "Service"}`,
              description: `Livraison prévue pour le ${new Date(dueDate).toLocaleDateString("fr-FR")}`,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}customer/payement/service/success`,
      cancel_url: `${process.env.CLIENT_URL}customer/payement/service/failed`,
      metadata: {
        providerId: providerId,
        customerId: customerId,
        price: price,
        dueDate: dueDate,
      },
    });

    return res.status(200).json({ data: { url: session.url } });
  } catch (error) {
    console.error("Erreur paiement offre :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

export default createOfferPaymentController;
