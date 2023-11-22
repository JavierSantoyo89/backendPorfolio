"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainController_1 = __importDefault(require("../components/mainController"));
const router = express_1.default.Router();
router.get('/', mainController_1.default.index);
router.get('/privacidad', mainController_1.default.Privacidad);
router.get('/agradecimiento', mainController_1.default.Agradecimiento);
router.get('/search', mainController_1.default.search);
exports.default = router;
