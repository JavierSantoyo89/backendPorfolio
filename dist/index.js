"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Jala el typescript");
//* ------- Variables de rutas ------- //
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
app.use(express_1.default.static(path_1.default.dirname + "/public"));
//* ------- Template engine ------- //
app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, './views/'));
app.set("views", "./src/views/");
//* const routes = require('./routers/main')
const main_1 = __importDefault(require("./src/routes/main"));
app.use("/", main_1.default);
//* ------- Cadena de ruta para error 404 ------- //
app.use((_req, res, _next) => {
    res.status(404).render("not-found");
});
//* ------- levantar servidor ------- //
const port = process.env.PORT || 1689;
app.listen(port, () => {
    console.log("Servidor funcionando en http://localhost:" + port);
});
//# sourceMappingURL=index.js.map