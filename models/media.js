import { Sequelize } from 'sequelize'
import { sequelize } from "../util/database.js";


export const Media = sequelize.define("media", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: Sequelize.STRING,
  creation: Sequelize.DATEONLY,
  rating: Sequelize.INTEGER,
});

