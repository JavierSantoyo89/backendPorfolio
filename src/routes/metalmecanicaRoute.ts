import express from 'express'
import { metalMecanicaController } from '../components/metalMecanicaController'

const metalmecanicaRoute = express.Router()
metalmecanicaRoute.get('/', metalMecanicaController.index)
metalmecanicaRoute.get('/create', metalMecanicaController.create)
metalmecanicaRoute.get('/read', metalMecanicaController.read)
metalmecanicaRoute.get('/update', metalMecanicaController.update)
metalmecanicaRoute.get('/delete', metalMecanicaController.delete)
export default metalmecanicaRoute
