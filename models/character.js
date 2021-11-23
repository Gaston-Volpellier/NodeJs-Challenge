import { Sequelize } from "sequelize";
import { sequelize } from "../util/database.js";


export const Character = sequelize.define("character", {
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
  image: Sequelize.STRING,
  age: Sequelize.INTEGER,
  weight: {
    type: Sequelize.INTEGER
  },
  history: {
    type: Sequelize.STRING
  }
});



