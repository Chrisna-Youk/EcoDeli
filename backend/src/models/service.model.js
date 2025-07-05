import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Service = db.define(
  "service",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
      unique: false,
    },
    price: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      unique: false,
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: false,
    },
    postalCode: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: false,
    },
    photo: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "category",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Service;
