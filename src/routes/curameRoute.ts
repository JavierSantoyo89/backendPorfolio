import express from 'express'
import { curameController } from '../components/curameController'

const curameRoute = express.Router()
curameRoute.get('/', curameController.index)
curameRoute.get('/create', curameController.create)
curameRoute.get('/read', curameController.read)
curameRoute.get('/update', curameController.update)
curameRoute.get('/delete', curameController.delete)

export default curameRoute
