"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
// import path from "path";
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const morgan_1 = __importDefault(require("morgan"));
const mainController_1 = __importDefault(require("./components/mainController"));
let dateActual = new Date();
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json()); //* In - out Json
app.disable("x-powered-by"); // ------ Deshabilita el mostrarlo ----- //
// Setup layout in EJS
app.use(express_ejs_layouts_1.default);
app.set("views", "./src/views/");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static( '/views'));
app.set("view engine", "ejs");
//! ------- Ruta de error en API's ------- //
// app.use((_req, res) => {
//   res.status(404).json({ error: "Not found" });
// });
// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express_1.default.urlencoded({ extended: false })); // convierte el form a objeto literal
app.use(express_1.default.json()); // convierte a JSON
// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express_1.default.static("./src/public"));
// app.use(express.static(path.join(__dirname + '/public')));
// ------- Direcciones raises de los proyectos ------- //
app.use("/", routes_1.mainRoute);
app.use("/curame", routes_1.curameRoute);
app.use("/metalmecanica", routes_1.metalmecanicaRoute);
app.use("/restaurant", routes_1.restaurantRoute);
app.use("/stadistics", mainController_1.default.stadistics);
// ------- levantar servidor ------- //
const PORT = process.env.PORT || 1689;
app.listen(PORT, () => {
    console.log(`server online http://localhost:${PORT}/`);
    console.log(`Hora: ${new Date().toLocaleTimeString()} Fecha: ${new Date().toLocaleDateString()}`);
    console.log(`Hora del sistema: ${dateActual}`);
});
