import { Request, Response } from 'express'

const mainController = {
  // ?---------------------------------------------------------------------------------------- //
  // *------------- Controladores para el index y documentacion de los proyectos ------------* //
  // ?======================================================================================== //
  index: (_req: Request, res: Response) => {
    // res.send('Este es el controlador del index')
    res.render('indexMain')
  }
}

export default mainController
