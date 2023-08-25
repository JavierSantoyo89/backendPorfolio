import { Request, Response } from "express"
export const curameController = {
  // ?---------------------------------------------------------------------------------------- //
  // *---------------- Controladores para el index y CRUD de CurAME AC Mexico ---------------* //
  // ?======================================================================================== //
  index: (_req: Request, res: Response) => {
    res.render('indexCurAME')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para crear un nuevo registro ----------------------* //
  // ?======================================================================================== //
  create: (_req: Request, res: Response) => {
    res.send('Este es el controlador de CurAME create')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para leer todos los registros ---------------------* //
  // ?======================================================================================== //
  read: (_req: Request, res: Response) => {
    res.send('Este es el controlador de CurAME read')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para actualizar un registro -----------------------* //
  // ?======================================================================================== //
  update: (_req: Request, res: Response) => {
    res.send('Este es el controlador de CurAME update')
  },
  // ?---------------------------------------------------------------------------------------- //
  // *------------------------- Controlador para borrar un registro -------------------------* //
  // ?======================================================================================== //
  delete: (_req: Request, res: Response) => {
    res.send('Este es el controlador de CurAME delete')
  }
}

// module.exports = curameController
