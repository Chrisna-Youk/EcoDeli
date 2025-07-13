import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Papers = db.define(
  "papers",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    driverLicense: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pricesDocument: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    siret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    request_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    role_requested: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Papers;
