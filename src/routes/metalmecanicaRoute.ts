import express from 'express'
import { metalMecanicaController } from '../components/metalMecanicaController'

const metalmecanicaRoute = express.Router()
metalmecanicaRoute.get('/', metalMecanicaController.index)


//* ---------------------- Ruta de prueba --------------------- //
metalmecanicaRoute.get('/prueba', metalMecanicaController.Prueba)


//*  --------------------- CRUD section Client --------------------- *//

metalmecanicaRoute.get('/process/detailall/', metalMecanicaController.readAllClient)
metalmecanicaRoute.get('/process/detailone/:id', metalMecanicaController.readOneClient)
metalmecanicaRoute.post('/process/create', metalMecanicaController.createClient)
metalmecanicaRoute.patch('/process/update/:id', metalMecanicaController.updateClient)
metalmecanicaRoute.delete('/process/delete/:id', metalMecanicaController.deleteOneClient)

//* ================================================================== *//



//*  --------------------- CRUD section Employee --------------------- *//

metalmecanicaRoute.get('/employee/detailall', metalMecanicaController.readAllEmployee) //* OK
metalmecanicaRoute.get('/employee/detail/:id', metalMecanicaController.readOneEmployee) //* Ok 
metalmecanicaRoute.post('/employee/create', metalMecanicaController.createEmployee) //* OK
metalmecanicaRoute.patch('/employee/update/:id', metalMecanicaController.updateEmployee) //* OK
metalmecanicaRoute.delete('/employee/delete/:id', metalMecanicaController.deleteOneEmployee) //* OK

//* ================================================================== *//



//*  --------------------- CRUD section Process --------------------- *//

metalmecanicaRoute.get('/process/detailall/', metalMecanicaController.readAllProcess)
metalmecanicaRoute.get('/process/detailone/', metalMecanicaController.readOneProcess)
metalmecanicaRoute.post('/process/create', metalMecanicaController.createProcess)
metalmecanicaRoute.patch('/process/update/:id', metalMecanicaController.updateProcess)
metalmecanicaRoute.delete('/process/delete/:id', metalMecanicaController.deleteOneProcess)

//* ================================================================== *//



//*  --------------------- CRUD section Product --------------------- *//

metalmecanicaRoute.get('/product/detailall/', metalMecanicaController.readAllProduct)
metalmecanicaRoute.get('/product/detailone/:id', metalMecanicaController.readOneProduct)
metalmecanicaRoute.post('/product/create', metalMecanicaController.createProduct)
metalmecanicaRoute.patch('/product/update/:id', metalMecanicaController.updateProduct)
metalmecanicaRoute.delete('/product/delete/:id', metalMecanicaController.deleteOneProduct)

//* ================================================================== *//



//*  --------------------- CRUD section Facture --------------------- *//

metalmecanicaRoute.get('/facture/detailall/', metalMecanicaController.readAllFacture)
metalmecanicaRoute.get('/facture/detailone/:id', metalMecanicaController.readOneFacture)
metalmecanicaRoute.post('/facture/create', metalMecanicaController.createFacture)
metalmecanicaRoute.patch('/facture/update/:id', metalMecanicaController.updateFacture)
metalmecanicaRoute.delete('Facture/delete/:id', metalMecanicaController.deleteOneFacture)

//* ================================================================== *//

export default metalmecanicaRoute
