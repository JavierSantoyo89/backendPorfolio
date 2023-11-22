"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const curameController_1 = require("../components/curameController");
const curameRoute = express_1.default.Router();
curameRoute.get('/', curameController_1.curameController.index);
curameRoute.get('/create', curameController_1.curameController.create);
curameRoute.get('/read', curameController_1.curameController.read);
curameRoute.get('/update', curameController_1.curameController.update);
curameRoute.get('/delete', curameController_1.curameController.delete);
exports.default = curameRoute;
