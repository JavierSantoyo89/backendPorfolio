import express from 'express'
import {
  mainRoute,
  curameRoute,
  metalmecanicaRoute,
  restaurantRoute
} from './routes'
const app = express()
app.use(express.json())
const PORT = 1689

// ------- Direcciones raises de los proyectos ------- //
app.use('/', mainRoute)
app.use('/curame', curameRoute)
app.use('/metalmecanica', metalmecanicaRoute)
app.use('/restaurant', restaurantRoute)

// ------- levantar servidor ------- //
app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
  console.log(`server online http://localhost:${PORT}/`)
  console.log(
    `Hora: ${new Date().toLocaleTimeString()} Fecha: ${new Date().toLocaleDateString()}`
  )
})
