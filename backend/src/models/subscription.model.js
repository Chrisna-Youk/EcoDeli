import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Subscription = db.define(
  "subscription",
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
    type: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    insurance: {
      type: DataTypes.STRING(128),
      allowNull: true,
      unique: false,
    },
    soldDelivery: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    soldPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    priority: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        unique: false, 
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Subscription;
