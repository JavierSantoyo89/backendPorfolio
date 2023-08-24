import { Request, Response } from 'express'

const mainController = {
  // ?---------------------------------------------------------------------------------------- //
  // *------------- Controladores para el index y documentacion de los proyectos ------------* //
  // ?======================================================================================== //
  index: (_req: Request, res: Response) => {
    // res.send('Este es el controlador del index')
    res.render('../views/main/indexMain.ejs')
  },
  Privacidad: (_req: Request, res: Response) => {
    res.render('../views/main/privacidad.ejs')
  },
  Agradecimiento: (_req: Request, res: Response) => {
    res.render('../views/main/agradecimiento.ejs')
  },
  search: (_req: Request, res: Response) => {
    res.send('Pendiente el crear el search')
  }
}

export default mainController
