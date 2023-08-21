/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'
import dotenv from 'dotenv'
import {
  mainRoute,
  curameRoute,
  metalmecanicaRoute,
  restaurantRoute
} from './routes'
dotenv.config()
const app = express()
app.use(express.json())

// Setup layout in EJS
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// ------- Direcciones raises de los proyectos ------- //
app.use('/', mainRoute)
app.use('/curame', curameRoute)
app.use('/metalmecanica', metalmecanicaRoute)
app.use('/restaurant', restaurantRoute)

// ------- levantar servidor ------- //
const port = process.env.PORT || 1689
app.listen(port, () => {
  // console.log(`Server running on port ${PORT}`);
  console.log(`server online http://localhost:${port}/`)
  console.log(
    `Hora: ${new Date().toLocaleTimeString()} Fecha: ${new Date().toLocaleDateString()}`
  )
})
