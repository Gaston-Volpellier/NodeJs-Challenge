import { Sequelize } from "sequelize";
import { sequelize } from "../util/database.js";

export const Genre = sequelize.define("genre", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
