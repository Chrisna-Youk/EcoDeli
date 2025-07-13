import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Transport = db.define(
  "transport",
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
    addressDeparture: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    addressDestination: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    photo: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
      unique: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Transport;
