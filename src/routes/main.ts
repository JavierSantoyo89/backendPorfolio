import express from 'express'
// const express = require('express');

// const mainController = require('../controllers//mainController');
import mainController from '../controllers/mainController'

const router = express.Router();

//* ---- Rutas dedicadas para navegacion general ---- //
router.get('/', mainController.index);
//* ================================================ //

// module.exports = router
export default router