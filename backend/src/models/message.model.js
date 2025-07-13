import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

const Message = db.define(
  "message",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false,
    },
    type: {
      type: DataTypes.ENUM("offer", "message"),
      allowNull: false,
      defaultValue: "message",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    dueDate: {
      type: DataTypes.DATE,
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
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "chat",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Message;
