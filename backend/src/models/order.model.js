import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Order = db.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    customerfirstName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    customerlastName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    providerfirstName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    providerlastName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    serviceTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Order;
