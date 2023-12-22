import express from 'express'
import { restaurantController } from '../controller/restaurantController'

const restaurantRoute = express.Router()

restaurantRoute.get('/', restaurantController.index)
restaurantRoute.get('/create', restaurantController.create)
restaurantRoute.get('/read', restaurantController.read)
restaurantRoute.get('/update', restaurantController.update)
restaurantRoute.get('/delete', restaurantController.delete)

export default restaurantRoute
