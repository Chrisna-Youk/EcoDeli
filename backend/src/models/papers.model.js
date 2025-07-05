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
    driverLicence: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePhoto: {
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
