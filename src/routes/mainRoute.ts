import express from 'express'
import mainController from '../components/mainController'

const router = express.Router()

router.get('/', mainController.index)

export default router
