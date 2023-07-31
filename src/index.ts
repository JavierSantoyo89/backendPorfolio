import { Request, Response, NextFunction } from "express"
console.log("Jala el typescript")

//* ------- Variables de rutas ------- //
import express from "express"
const app = express()
import path from "path"
app.use(express.static(path.dirname + "/public"))

//* ------- Template engine ------- //
app.set("view engine", "ejs")
// app.set('views', path.join(__dirname, './views/'));
app.set("views", "./src/views/")

//* const routes = require('./routers/main')
import routes from "./routes/main"
app.use("/", routes)

//* ------- Cadena de ruta para error 404 ------- //
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).render("not-found")
})

//* ------- levantar servidor ------- //
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Servidor funcionando en http://localhost:" + PORT)
  console.log("El puesto es: " + PORT)
})
