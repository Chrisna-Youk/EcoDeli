import Announcement from "../../../models/announcement.model.js";
import Payement from "../../../models/payement.model.js";
import stripe from "../../../stripe/stripe.js";

async function createAnnouncementController(req, res) {
  const { session_id } = req.body;

  const session = await stripe.checkout.sessions.retrieve(session_id);

  const metadata = session.metadata;

  // console.log("id : ", session.id);
  // console.log("idSession : ", session_id);

  // if (session.payment_status === "paid") {
  //   const existingAnnouncement = await Announcement.findOne({
  //     sessionId: session_id,
  //   });

  //   if (existingAnnouncement) {
  //     return res
  //       .status(403)
  //       .json({ data: "Cette session a déjà été traitée." });
  //   }
  // }

  try {
    const newAnnouncement = await Announcement.create({
      type: metadata.type,
      title: metadata.title,
      sessionId: session_id,
      description: metadata.description,
      cityDeparture: metadata.cityDeparture,
      cityDestination: metadata.cityDestination,
      latDeparture: Number(metadata.latDeparture),
      lonDeparture: Number(metadata.lonDeparture),
      latDestination: Number(metadata.latDestination),
      lonDestination: Number(metadata.lonDestination),
      date: metadata.date,
      weight: Number(metadata.weight),
      length: Number(metadata.length),
      width: Number(metadata.width),
      depth: Number(metadata.depth),
      userId: Number(metadata.userId),
      active: true,
    });

    await Payement.create({
      kmDistance: metadata.kmDistance,
      hourlyDuration: metadata.hourlyDuration,
      price: metadata.price,
      customerId: metadata.userId,
      announcementId: newAnnouncement.id,
    });

    return res.status(201).json({
      data: {
        message: "Annonce créée avec succès",
        announcement: newAnnouncement,
      },
    });
  } catch (error) {
    console.error("Erreur création annonce:", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

export default createAnnouncementController;
