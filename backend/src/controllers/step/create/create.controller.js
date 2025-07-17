import Step from "../../../models/step.model.js";
import Announcement from "../../../models/announcement.model.js";
import axios from "axios";
import Checkpoint from "../../../models/checkpoint.model.js";
import { codeGenerator } from "../../../utilities/generator.utilities.js";

async function createStepController(req, res) {
  const { type, announcement } = req.body;
  const providerId = req.user.id;

  try {
    const announcementInDb = await Announcement.findOne({
      where: { id: announcement.id },
    });

    // console.log("Coords used for OSRM:", {
    //   lonDeparture: announcementInDb.lonDeparture,
    //   latDeparture: announcementInDb.latDeparture,
    //   lonDestination: announcementInDb.lonDestination,
    //   latDestination: announcementInDb.latDestination,
    // });

    const response = await axios.get(
      `https://router.project-osrm.org/route/v1/driving/${Number(
        announcementInDb.lonDeparture
      )},${Number(announcementInDb.latDeparture)};${Number(
        announcementInDb.lonDestination
      )},${Number(announcementInDb.latDestination)}?overview=false`
    );

    const kmDistance = (response.data.routes[0].distance / 1000).toFixed(2);
    const price = (kmDistance * 0.3).toFixed(2);
    const code = codeGenerator();

    if (type === "complete") {
      try {
        announcementInDb.update({ active: false });

        const stepCount = await Step.count({
          where: {
            announcementId: announcement.id,
          },
        });

        const step = Step.create({
          type: "complete",
          providerId: providerId,
          announcementId: announcement.id,
          checkpointId: null,
          status: "En cours",
          code: code,
          count: stepCount + 1,
          latDeparture: announcement.latDeparture,
          lonDeparture: announcement.lonDeparture,
          latDestination: announcement.latDestination,
          lonDestination: announcement.lonDestination,
          kmDistance: kmDistance,
          price: price,
        });

        return res.status(200).json({
          data: {
            announcement: announcementInDb,
            step: step,
          },
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ data: { message: "Error server" } });
      }
    } else if (type === "partial") {
      const { checkpointId } = req.body;

      const checkpoint = await Checkpoint.findOne({
        where: { id: checkpointId },
      });

      const checkpointAlreadyTaken = await Step.findOne({
        where: { checkpointId: checkpointId },
      });

      const stepCount = await Step.count({
        where: {
          announcementId: announcement.id,
        },
      });

      if (!checkpointId) {
        return res
          .status(400)
          .json({ data: { message: "Checkpoint manquant" } });
      }

      if (checkpointAlreadyTaken) {
        return res
          .status(400)
          .json({ data: { message: "Checkpoint déja réserver" } });
      }

      try {
        const step = Step.create({
          type: "partial",
          providerId: providerId,
          announcementId: announcement.id,
          checkpointId: checkpointId,
          kmDistance: kmDistance,
          status: "En cours",
          code: code,
          count: stepCount + 1,
          latDeparture: announcement.latDeparture,
          lonDeparture: announcement.lonDeparture,
          latDestination: checkpoint.latitude,
          lonDestination: checkpoint.longitude,
          price: price,
        });

        announcementInDb.update({
          cityDeparture: checkpoint.city,
          latDeparture: checkpoint.latitude,
          lonDeparture: checkpoint.longitude,
          active: true,
        });

        return res.status(200).json({
          data: {
            announcement: announcementInDb,
            step: step,
          },
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ data: { message: "Error server" } });
      }
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur serveur", error: error.message });
  }
}

export default createStepController;
