import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Category = db.define(
  "category",
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
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
      unique: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Category;
