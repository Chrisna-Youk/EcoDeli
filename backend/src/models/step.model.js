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
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.ENUM("complete", "partial"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("En attente", "Livré", "En cours"),
      allowNull: false,
      defaultValue: "En attente",
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: false,
    },
    kmDistance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    latDeparture: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    lonDeparture: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    latDestination: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    lonDestination: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    checkpointId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "checkpoint",
        key: "id",
      },
    },
    announcementId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "announcement",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Step;
