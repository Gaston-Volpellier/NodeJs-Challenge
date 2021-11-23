import express from 'express'
import { check, body } from 'express-validator'

export const router = express.Router()


router.post(
  '/auth/login', 
  [
    body('email')
      .isEmail()
      .withMessage('Por favor ingrese un email valido.')
      .normalizeEmail(),
    body('password', 'Contraseña erronea.')
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  postLogin
)

router.post(
  '/auth/register',
  [ 
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      // .custom((value, { req }) => {
      //   return User.findOne({email: value})
      //   .then(userDoc => {
      //     if(userDoc) {          
      //       return Promise.reject('El email ya existe.')
      //     }
      //   })
      // })
      .normalizeEmail(),
    body(
      'password', 
      'Contraseña no valida. Debe ser de al menos 5 caracteres, con letras o numeros.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Las contraseñas no coinciden")
        }
        return true
    })
  ],
  postRegister
)