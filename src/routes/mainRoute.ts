import express from 'express'
import mainController from '../controller/mainController'

const router = express.Router()

router.get('/', mainController.index)
router.get('/privacidad', mainController.Privacidad)
router.get('/agradecimiento', mainController.Agradecimiento)
router.get('/search', mainController.search)
router.get('/stadistics',mainController.stadistics)

export default router
