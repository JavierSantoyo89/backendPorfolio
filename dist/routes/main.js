"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express');
// const mainController = require('../controllers//mainController');
const mainController_1 = __importDefault(require("../controllers/mainController"));
const router = express_1.default.Router();
//* ---- Rutas dedicadas para navegacion general ---- //
router.get('/', mainController_1.default.index);
//* ================================================ //
// module.exports = router
exports.default = router;
//# sourceMappingURL=main.js.map