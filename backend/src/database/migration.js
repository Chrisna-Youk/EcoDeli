import { Sequelize } from "sequelize";
import { db } from "./db.js";
import User from "../models/user.model.js";
import Service from "../models/service.model.js";
import Category from "../models/category.model.js";

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
    await import("../models/checkpoint.model.js");
    await import("../models/order.model.js");
    await import("../models/invoice.model.js");
    await import("../models/step.model.js");
    await import("../models/service.model.js");
    await import("../models/relations/announcement.relation.js");
    await import("../models/relations/user.relation.js");
    await import("../models/relations/step.relation.js");
    await import("../models/relations/service.relation.js");
    await import("../models/transport.model.js");

    // Create admin sample User : admin@test.com and Admin123?WowBro
    await User.findOrCreate({
      where: { email: "admin@test.com" },
      defaults: {
        id: 1,
        firstName: "Dana",
        lastName: "admin",
        company: "Kalo",
        password:
          "$2b$10$6oQV1sCvDoMFcN4dCkokg.1Fz3nAhk6J9c/ymolNfkiviVo1gA0vO",
        verified: true,
        verifyToken: null,
        otp: null,
        active: true,
        role: "admin",
      },
    });

    // Create categories : 5 units
    /*await Category.findOrCreate({
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
    });*/

    // Create services for userId 1 and catégorieId 1
    await Service.findOrCreate({
      where: { title: "Cours de guitare pour débutants" },
      defaults: {
        userId: 1,
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
        userId: 1,
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
        userId: 1,
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

    const args = process.argv.slice(2);
    const force = args.includes("--force") ? true : false;
    const alter = args.includes("--alter") ? true : false;

    console.log(
      `🔄 Syncing database with options: force=${force}, alter=${alter}`
    );

    await db.sync({ force: force, alter: alter });

    console.log(`🎉 Database synced successfully.`);
  } catch (error) {
    console.error(`❌ Failed to sync database:`, error);
  } finally {
    await db.close();
  }
}

migrate();

export default migrate;
