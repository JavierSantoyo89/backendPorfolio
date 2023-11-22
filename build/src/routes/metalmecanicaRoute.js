"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const metalMecanicaController_1 = require("../components/metalMecanicaController");
const metalmecanicaRoute = express_1.default.Router();
metalmecanicaRoute.get('/', metalMecanicaController_1.metalMecanicaController.index);
//*  --------------------- CRUD section Client --------------------- *//
metalmecanicaRoute.get('/client/detailall/', metalMecanicaController_1.metalMecanicaController.readAllClient); //* OK *
metalmecanicaRoute.get('/client/detail/:id', metalMecanicaController_1.metalMecanicaController.readOneClient); //* OK *
metalmecanicaRoute.post('/client/create', metalMecanicaController_1.metalMecanicaController.createClient); //* OK *
metalmecanicaRoute.patch('/client/update/:id', metalMecanicaController_1.metalMecanicaController.updateClient); //* OK *
metalmecanicaRoute.delete('/client/delete/:id', metalMecanicaController_1.metalMecanicaController.deleteOneClient); //* OK *
//* ================================================================== *//
//*  --------------------- CRUD section Employee --------------------- *//
metalmecanicaRoute.get('/employee/detailall', metalMecanicaController_1.metalMecanicaController.readAllEmployee); //* OK *
metalmecanicaRoute.get('/employee/detail/:id', metalMecanicaController_1.metalMecanicaController.readOneEmployee); //* OK *
metalmecanicaRoute.post('/employee/create', metalMecanicaController_1.metalMecanicaController.createEmployee); //* OK *
metalmecanicaRoute.patch('/employee/update/:id', metalMecanicaController_1.metalMecanicaController.updateEmployee); //* OK *
metalmecanicaRoute.delete('/employee/delete/:id', metalMecanicaController_1.metalMecanicaController.deleteOneEmployee); //* OK *
//* ================================================================== *//
//*  --------------------- CRUD section Process --------------------- *//
metalmecanicaRoute.get('/process/detailall/', metalMecanicaController_1.metalMecanicaController.readAllProcess); //* OK *
metalmecanicaRoute.get('/process/detail/:id', metalMecanicaController_1.metalMecanicaController.readOneProcess); //* OK *
metalmecanicaRoute.post('/process/create', metalMecanicaController_1.metalMecanicaController.createProcess); //* OK *
metalmecanicaRoute.patch('/process/update/:id', metalMecanicaController_1.metalMecanicaController.updateProcess); //* OK *
metalmecanicaRoute.delete('/process/delete/:id', metalMecanicaController_1.metalMecanicaController.deleteOneProcess); //* OK *
//* ================================================================== *//
//*  --------------------- CRUD section Product --------------------- *//
metalmecanicaRoute.get('/product/detailall/', metalMecanicaController_1.metalMecanicaController.readAllProduct); //* OK *
metalmecanicaRoute.get('/product/detail/:id', metalMecanicaController_1.metalMecanicaController.readOneProduct); //* OK *
metalmecanicaRoute.post('/product/create', metalMecanicaController_1.metalMecanicaController.createProduct); //* OK *
metalmecanicaRoute.patch('/product/update/:id', metalMecanicaController_1.metalMecanicaController.updateProduct); //* OK *
metalmecanicaRoute.delete('/product/delete/:id', metalMecanicaController_1.metalMecanicaController.deleteOneProduct); //* OK *
//* ================================================================== *//
//*  --------------------- CRUD section Bill --------------------- *//
metalmecanicaRoute.get('/bill/detailall/', metalMecanicaController_1.metalMecanicaController.readAllFacture); //* OK *
metalmecanicaRoute.get('/bill/detail/:id', metalMecanicaController_1.metalMecanicaController.readOneFacture); //* OK *
metalmecanicaRoute.post('/bill/create', metalMecanicaController_1.metalMecanicaController.createFacture); //* OK *
metalmecanicaRoute.patch('/bill/update/:id', metalMecanicaController_1.metalMecanicaController.updateFacture); //* OK *
metalmecanicaRoute.delete('/bill/delete/:id', metalMecanicaController_1.metalMecanicaController.deleteOneFacture); //* OK *
//* ================================================================== *//
exports.default = metalmecanicaRoute;
