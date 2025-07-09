import { Sequelize } from "sequelize";
import { db } from "./db.js";
import User from "../models/user.model.js";
import Service from "../models/service.model.js";
import Category from "../models/category.model.js";
import Message from "../models/message.model.js";
import Chat from "../models/chat.model.js";

async function migrate() {
  const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } =
    process.env;

  const instanceToCreateDbIfNotExists = new Sequelize(
    "",
    DB_USERNAME,
    DB_PASSWORD,
    {
      host: DB_HOST,
      port: DB_PORT,
      dialect: DB_DIALECT,
      logging: false,
    }
  );
  try {
    await instanceToCreateDbIfNotExists.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`
    );

    console.log(`⏳ Connecting to database...`);
    await db.authenticate();
    console.log(`✅ Connection has been established successfully.`);

    await import("../models/user.model.js");
    await import("../models/subscription.model.js");
    await import("../models/papers.model.js");
    await import("../models/announcement.model.js");
    await import("../models/checkpoint.model.js");
    await import("../models/order.model.js");
    await import("../models/invoice.model.js");
    await import("../models/step.model.js");
    await import("../models/service.model.js");
    await import("../models/chat.model.js");
    await import("../models/message.model.js");
    await import("../models/relations/announcement.relation.js");
    await import("../models/relations/user.relation.js");
    await import("../models/relations/step.relation.js");
    await import("../models/relations/service.relation.js");

    const args = process.argv.slice(2);
    const force = args.includes("--force") ? true : false;
    const alter = args.includes("--alter") ? true : false;

    console.log(
      `🔄 Syncing database with options: force=${force}, alter=${alter}`
    );

    await db.sync({ force: force, alter: alter });

    // Create admin sample User : admin@test.com and Admin123?WowBro id 1
    await User.findOrCreate({
      where: { email: "admin@test.com" },
      defaults: {
        id: 10,
        firstName: "AdminFirstname",
        lastName: "AdminLastname",
        company: "AdminCo",
        password:
          "$2b$10$6oQV1sCvDoMFcN4dCkokg.1Fz3nAhk6J9c/ymolNfkiviVo1gA0vO",
        verified: true,
        verifyToken: null,
        otp: null,
        active: true,
        role: "admin",
      },
    });

    await User.findOrCreate({
      where: { email: "customer@test.com" },
      defaults: {
        id: 20,
        firstName: "CustomerFirstname",
        lastName: "CustomerLastname",
        company: "",
        password:
          "$2b$10$6oQV1sCvDoMFcN4dCkokg.1Fz3nAhk6J9c/ymolNfkiviVo1gA0vO",
        verified: true,
        verifyToken: null,
        otp: null,
        active: true,
        role: "customer",
      },
    });

    await User.findOrCreate({
      where: { email: "provider@test.com" },
      defaults: {
        id: 30,
        firstName: "ProviderFirstname",
        lastName: "ProviderLastname",
        company: "ProviderCo",
        password:
          "$2b$10$6oQV1sCvDoMFcN4dCkokg.1Fz3nAhk6J9c/ymolNfkiviVo1gA0vO",
        verified: true,
        verifyToken: null,
        otp: null,
        active: true,
        role: "provider",
      },
    });

    // Create categories : 3 units
    await Category.findOrCreate({
      where: { id: 1, name: "cours" },
      defaults: {
        name: "cours",
        active: true,
      },
    });

    await Category.findOrCreate({
      where: { id: 2, name: "nettoyage" },
      defaults: {
        name: "nettoyage",
        active: true,
      },
    });

    await Category.findOrCreate({
      where: { id: 3, name: "bricolage" },
      defaults: {
        name: "bricolage",
        active: true,
      },
    });

    // Create services for userId 1 and catégorieId 1
    await Service.findOrCreate({
      where: { title: "Cours de guitare pour débutants" },
      defaults: {
        userId: 20,
        categoryId: 1,
        title: "Cours de guitare pour débutants",
        description:
          "Apprenez les bases de la guitare en quelques semaines avec un musicien expérimenté.",
        price: 150,
        city: "Paris",
        postalCode: "75010",
        photo: "uploads/files/guitare.jpg",
      },
    });

    await Service.findOrCreate({
      where: { title: "Nettoyage appartement 2 pièces" },
      defaults: {
        userId: 20,
        categoryId: 2,
        title: "Nettoyage appartement 2 pièces",
        description:
          "Service rapide et efficace pour le nettoyage complet d’un petit appartement.",
        price: 80,
        city: "Lyon",
        postalCode: "69007",
        photo: "uploads/files/nettoyage.jpg",
      },
    });

    await Service.findOrCreate({
      where: { title: "Montage de meuble IKEA" },
      defaults: {
        userId: 20,
        categoryId: 3,
        title: "Montage de meuble IKEA",
        description:
          "Besoin d'aide pour monter un meuble ? Je suis rapide, soigné, et expérimenté.",
        price: 60,
        city: "Marseille",
        postalCode: "13005",
        photo: "uploads/files/ikea.jpg",
      },
    });

    // Create Chat with customer 2 and provider 1
    await Chat.findOrCreate({
      where: { id: 1 },
      defaults: {
        id: 1,
        customerId: 20,
        providerId: 30,
      },
    });

    // Create messages for userId 1 and serviceId 25
    await Message.findOrCreate({
      where: { id: 1 },
      defaults: {
        id: 1,
        userId: 20,
        chatId: 1,
        content: "Bonjour, je suis intéressé par le service.",
      },
    });

    await Message.findOrCreate({
      where: { id: 2 },
      defaults: {
        id: 2,
        userId: 20,
        chatId: 1,
        content: "Est-ce que vous êtes disponible cette semaine ?",
      },
    });

    await Message.findOrCreate({
      where: { id: 3 },
      defaults: {
        id: 3,
        userId: 20,
        chatId: 1,
        content: "Merci pour votre réponse rapide.",
      },
    });

    // Create messages for userId 2 and serviceId 25
    await Message.findOrCreate({
      where: { id: 4 },
      defaults: {
        id: 4,
        userId: 30,
        chatId: 1,
        content: "Salut, j'aimerais en savoir plus sur ce service.",
      },
    });

    await Message.findOrCreate({
      where: { id: 5 },
      defaults: {
        id: 5,
        userId: 30,
        chatId: 1,
        content: "Est-ce que le service inclut les déplacements ?",
      },
    });

    await Message.findOrCreate({
      where: { id: 6 },
      defaults: {
        id: 6,
        userId: 30,
        chatId: 1,
        content: "Merci pour votre aide.",
      },
    });

    console.log(`🎉 Database synced successfully.`);
  } catch (error) {
    console.error(`❌ Failed to sync database:`, error);
  } finally {
    await db.close();
  }
}

migrate();

export default migrate;
