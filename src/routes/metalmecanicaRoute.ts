import express from 'express'
import { metalMecanicaController } from '../components/metalMecanicaController'

const metalmecanicaRoute = express.Router()
metalmecanicaRoute.get('/', metalMecanicaController.index)

//*  --------------------- CRUD section Client --------------------- *//

metalmecanicaRoute.get('/client/detailall/', metalMecanicaController.readAllClient)           //* OK *
metalmecanicaRoute.get('/client/detail/:id', metalMecanicaController.readOneClient)           //* OK *
metalmecanicaRoute.post('/client/create', metalMecanicaController.createClient)               //* OK *
metalmecanicaRoute.patch('/client/update/:id', metalMecanicaController.updateClient)          //* OK *
metalmecanicaRoute.delete('/client/delete/:id', metalMecanicaController.deleteOneClient)      //* OK *

//* ================================================================== *//



//*  --------------------- CRUD section Employee --------------------- *//

metalmecanicaRoute.get('/employee/detailall', metalMecanicaController.readAllEmployee)        //* OK *
metalmecanicaRoute.get('/employee/detail/:id', metalMecanicaController.readOneEmployee)       //* OK *
metalmecanicaRoute.post('/employee/create', metalMecanicaController.createEmployee)           //* OK *
metalmecanicaRoute.patch('/employee/update/:id', metalMecanicaController.updateEmployee)      //* OK *
metalmecanicaRoute.delete('/employee/delete/:id', metalMecanicaController.deleteOneEmployee)  //* OK *

//* ================================================================== *//



//*  --------------------- CRUD section Process --------------------- *//

metalmecanicaRoute.get('/process/detailall/', metalMecanicaController.readAllProcess)        //* OK *
metalmecanicaRoute.get('/process/detail/:id', metalMecanicaController.readOneProcess)        //* OK *
metalmecanicaRoute.post('/process/create', metalMecanicaController.createProcess)            //* OK *
metalmecanicaRoute.patch('/process/update/:id', metalMecanicaController.updateProcess)       //* OK *
metalmecanicaRoute.delete('/process/delete/:id', metalMecanicaController.deleteOneProcess)   //* OK *

//* ================================================================== *//



//*  --------------------- CRUD section Product --------------------- *//

metalmecanicaRoute.get('/product/detailall/', metalMecanicaController.readAllProduct)        //* OK *
metalmecanicaRoute.get('/product/detail/:id', metalMecanicaController.readOneProduct)        //* OK *
metalmecanicaRoute.post('/product/create', metalMecanicaController.createProduct)            //* OK *
metalmecanicaRoute.patch('/product/update/:id', metalMecanicaController.updateProduct)       //* OK *
metalmecanicaRoute.delete('/product/delete/:id', metalMecanicaController.deleteOneProduct)   //* OK *

//* ================================================================== *//


//*  --------------------- CRUD section history --------------------- *//

metalmecanicaRoute.get('/history/detailall/', metalMecanicaController.readAllHistory)        //* OK *
metalmecanicaRoute.get('/history/detail/:id', metalMecanicaController.readOneHistory)        //* OK *
metalmecanicaRoute.post('/history/create', metalMecanicaController.createHistory)            //* OK *
metalmecanicaRoute.patch('/history/update/:id', metalMecanicaController.updateHistory)       //* OK *
metalmecanicaRoute.delete('/history/delete/:id', metalMecanicaController.deleteOnehistory)   //* OK *

//* ================================================================== */



//*  --------------------- CRUD section Bill --------------------- *//

metalmecanicaRoute.get('/bill/detailall/', metalMecanicaController.readAllFacture)           //* OK *
metalmecanicaRoute.get('/bill/detail/:id', metalMecanicaController.readOneFacture)           //* OK *
metalmecanicaRoute.post('/bill/create', metalMecanicaController.createFacture)               //* OK *
metalmecanicaRoute.patch('/bill/update/:id', metalMecanicaController.updateFacture)          //* OK *
metalmecanicaRoute.delete('/bill/delete/:id', metalMecanicaController.deleteOneFacture)      //* OK *

//* ================================================================== *//

export default metalmecanicaRoute
