import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('alkemy', 'root', 'mierda35', {
  dialect: 'mysql', 
  host: 'localhost'
})