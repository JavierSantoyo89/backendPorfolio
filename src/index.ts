import express from "express";
import cors from "cors";
import expressLayouts from "express-ejs-layouts";
// import path from "path";
import dotenv from "dotenv";
import {
  mainRoute,
  curameRoute,
  metalmecanicaRoute,
  restaurantRoute,
} from "./routes";
import morgan from 'morgan'
import mainController from "./components/mainController";
let dateActual =  new Date()


dotenv.config();
const app = express();
app.use(cors(
  {
    origin: "https://backendportfolio-r0uf.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
));
app.use(morgan('dev'))
app.use(express.json());  //* In - out Json
app.disable("x-powered-by"); // ------ Deshabilita el mostrarlo ----- //

// Setup layout in EJS
app.use(expressLayouts);
app.set("views","./src/views/");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static( '/views'));
app.set("view engine", "ejs");

//! ------- Ruta de error en API's ------- //
// app.use((_req, res) => {
//   res.status(404).json({ error: "Not found" });
// });

// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static("./src/public"));
// app.use(express.static(path.join(__dirname + '/public')));


// ------- Direcciones raises de los proyectos ------- //
app.use("/", mainRoute);
app.use("/curame", curameRoute);
app.use("/metalmecanica", metalmecanicaRoute);
app.use("/restaurant", restaurantRoute);
app.use("/stadistics",mainController.stadistics)

// ------- levantar servidor ------- //
const PORT = process.env.PORT || 1689;
app.listen(PORT, () => {
  console.log(`server online http://localhost:${PORT}/`);
  console.log(
    `Hora: ${new Date().toLocaleTimeString()} Fecha: ${new Date().toLocaleDateString()}`);
    console.log(`Hora del sistema: ${dateActual}`)
});
