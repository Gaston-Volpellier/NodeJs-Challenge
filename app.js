import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { sequelize } from "./util/database.js";
import { menuRouter } from "./routes/index.js";
import { Character } from "./models/character.js";
import { Media } from "./models/media.js";
import { Genre } from "./models/genre.js";

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))

dotenv.config();

app.use( menuRouter )

Media.belongsToMany(Character, { through: "charactermedia" });
Media.hasOne(Genre);
Character.belongsToMany(Media, { through: 'charactermedia'})

sequelize
  .sync({ force: false })
  .then((result) => {
    app.listen(PORT);
    console.log("Server listening on PORT", PORT);
  })
  .catch((err) => {
    console.log(err);
  });
