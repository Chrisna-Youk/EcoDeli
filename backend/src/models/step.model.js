import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Step = db.define(
  "step",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Step;
