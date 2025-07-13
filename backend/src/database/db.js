import { Sequelize } from "sequelize";

export const db = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  timezone: "+01:00",
  logging: false,
});

export async function dbConnection() {
  try {
    await db.authenticate();

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
    await import("../models/relations/chat.relation.js");
    
    console.log("Connection has been established successfully.");
    // force: create models from scratch
    // alter: allow alter the db
    await db.sync({ force: false, alter: false });
    console.log("Database synchronized.");
  } catch (error) {
    console.log(error);
  }
}
