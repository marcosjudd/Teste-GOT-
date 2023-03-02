import express from 'express';
import { regiao, aparicoes } from '../controllers/user.js'

const router = express.Router()

router.get('/regiao', regiao)
router.get('/aparicoes', aparicoes)

export default router;