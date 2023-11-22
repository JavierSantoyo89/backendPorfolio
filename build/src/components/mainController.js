"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const mainController = {
    // ?---------------------------------------------------------------------------------------- //
    // *------------- Controladores para el index y documentacion de los proyectos ------------* //
    // ?======================================================================================== //
    index: (_req, res) => {
        // res.send('Este es el controlador del index')
        res.render('indexMain.ejs');
    },
    Privacidad: (_req, res) => {
        res.render('privacidad.ejs');
    },
    Agradecimiento: (_req, res) => {
        res.render('agradecimiento.ejs');
    },
    search: (_req, res) => {
        res.send('Pendiente el crear el search');
    },
    stadistics: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        function main() {
            return __awaiter(this, void 0, void 0, function* () {
                const allStadistics = yield db_1.prisma.tblstadistics.findMany();
                const countStadistics = yield db_1.prisma.tblstadistics.count();
                res.json({ data: allStadistics, count: countStadistics, SearchAll: "Ok" }).status(200);
                console.log("Read all stadistics complete!!!");
            });
        }
        main()
            .then(() => __awaiter(void 0, void 0, void 0, function* () { }))
            .catch((e) => __awaiter(void 0, void 0, void 0, function* () { console.error(e); }));
    })
};
exports.default = mainController;
