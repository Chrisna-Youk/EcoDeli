import Announcement from "../../../models/announcement.model.js";
import stripe from "../../../stripe/stripe.js";
import axios from "axios";

async function createPayementController(req, res) {
  try {
    const {
      type,
      title,
      description,
      cityDeparture,
      cityDestination,
      latDeparture,
      lonDeparture,
      latDestination,
      lonDestination,
      date,
      weight,
      length,
      width,
      depth,
      userId,
      active,
    } = req.body;

    const response = await axios.get(
      `https://router.project-osrm.org/route/v1/driving/${lonDeparture},${latDeparture};${lonDestination},${latDestination}?overview=false`
    );

    const kmDistance = response.data.routes[0].distance / 1000;
    const hourlyDuration = response.data.routes[0].duration / 3600;

    const price = (kmDistance * 0.3).toFixed(2);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Trajet personnalisé",
            },
            unit_amount: Math.round(price * 100), // en centimes !
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/customer/payement/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/customer/payement/cancel`,
      metadata: {
        type: type,
        title: title,
        description: description,
        cityDeparture: cityDeparture,
        cityDestination: cityDestination,
        latDeparture: latDeparture.toString(),
        lonDeparture: lonDeparture.toString(),
        latDestination: latDestination.toString(),
        lonDestination: lonDestination.toString(),
        date: date,
        weight: weight?.toString() || "0",
        length: length?.toString() || "0",
        width: width?.toString() || "0",
        depth: depth?.toString() || "0",
        userId: Number(userId),
        active: active,
      },
    });

    return res.status(200).json({ data: { url: session.url } });
  } catch (error) {
    console.error("Erreur : ", error);
    return res.status(500).json({ data: "Erreur serveur." });
  }
}

export default createPayementController;
