import { Request, Response } from "express"
export const metalMecanicaController = {
  index: (_req: Request, res: Response) => {
  // ?---------------------------------------------------------------------------------------- //
  // *------------------- Controladores para el proyecto de metal mecanica ------------------* //
  // ?======================================================================================== //
    res.render('indexMetalMecanica')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para crear un nuevo registro ----------------------* //
  // ?======================================================================================== //
  create: (_req: Request, res: Response) => {
    res.send('Este es el controlador de metal-mecanica create')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para leer todos los registros ---------------------* //
  // ?======================================================================================== //
  read: (_req: Request, res: Response) => {
    res.send('Este es el controlador de metal-mecanica read')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para actualizar un registro -----------------------* //
  // ?======================================================================================== //
  update: (_req: Request, res: Response) => {
    res.send('Este es el controlador de metal-mecanica update')
  },
  // ?---------------------------------------------------------------------------------------- //
  // *------------------------- Controlador para borrar un registro -------------------------* //
  // ?======================================================================================== //
  delete: (_req: Request, res: Response) => {
    res.send('Este es el controlador de metal-mecanica delete')
  }
}
