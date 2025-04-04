import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    verifyToken: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    otp: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    customer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    delivrer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    merchant: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default User;
