import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Announcement = db.define(
  "announcement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    photo: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: true,
      unique: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    size: {
      type: DataTypes.STRING(3),
      allowNull: true,
      unique: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    addressDeparture: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    addressDestination: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    length: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    depth: {
      type: DataTypes.FLOAT,
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

export default Announcement;
