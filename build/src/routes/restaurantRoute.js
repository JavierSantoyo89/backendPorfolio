"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurantController_1 = require("../components/restaurantController");
const restaurantRoute = express_1.default.Router();
restaurantRoute.get('/', restaurantController_1.restaurantController.index);
restaurantRoute.get('/create', restaurantController_1.restaurantController.create);
restaurantRoute.get('/read', restaurantController_1.restaurantController.read);
restaurantRoute.get('/update', restaurantController_1.restaurantController.update);
restaurantRoute.get('/delete', restaurantController_1.restaurantController.delete);
exports.default = restaurantRoute;
