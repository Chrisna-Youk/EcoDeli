import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Payement = db.define(
  "payement",
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
    kmDistance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    hourlyDuration: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      unique: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
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

export default Payement;
