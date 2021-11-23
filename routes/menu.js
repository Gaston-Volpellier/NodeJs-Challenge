import express from 'express'
import { getCharacters, getMenu, postAddCharacter } from '../controllers/menu.js'

export const router = express.Router()

router.get('/', getMenu)

router.get('/characters', getCharacters)

router.post('/create-character', postAddCharacter)