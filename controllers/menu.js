import { Character } from "../models/character.js";

export const getMenu = (req, res) => {
  res.status(200).send('<h1>Menu</h1>')
}

export const getCharacters = (req, res) => {
  Character.findAll()
    .then((characters) => {
      res.json(characters.map(({ id, image, name }) => ({ id, image, name })));
    })
    .catch((err) => console.log("Get characters error: " + err));
};


export const getAddCharacter = (req, res) => {};

export const postAddCharacter = (req, res, next) => {
  res.json({requestBody: req.body})
}


// export const postAddCharacter = (req, res) => {
//   const name = req.body.name;
//   const image = req.body.image;
//   const age = req.body.age;
//   const weight = req.body.weight;
//   const history = req.body.history;

//   const char = Character.create({
//     name: name,
//     image: image,
//     age: age,
//     weight: weight,
//     history: history,
//   })
//   .then(newChar => {
//     console.log('Character added')
//     console.log(newChar.toJSON())
//     console.log(newChar.name)
//   })
//   .catch(err => console.log('Error creating character: '+err))
// };