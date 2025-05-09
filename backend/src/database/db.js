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
    console.log("Connection has been established successfully.");
    // force: create models from scratch
    // alter: allow alter the db
    await db.sync({ force: false, alter: false });
    console.log("Database synchronized.");
  } catch (error) {
    console.log(error)
  }
}
