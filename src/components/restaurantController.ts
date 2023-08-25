import { Request, Response } from "express"
export const restaurantController = {

  // ?---------------------------------------------------------------------------------------- //
  // *--------------------- Controladores para el proyecto de restaurant --------------------* //
  // ?======================================================================================== //

  index: (_req: Request, res: Response) => {
    res.render('indexRestaurant')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para crear un nuevo registro ----------------------* //
  // ?======================================================================================== //
  create: (_req: Request, res: Response) => {
    res.send('Este es el controlador de restaurant create')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para leer todos los registros ---------------------* //
  // ?======================================================================================== //
  read: (_req: Request, res: Response) => {
    res.send('Este es el controlador de restaurant read')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para actualizar un registro -----------------------* //
  // ?======================================================================================== //
  update: (_req: Request, res: Response) => {
    res.send('Este es el controlador de restaurant update')
  },
  // ?---------------------------------------------------------------------------------------- //
  // *------------------------- Controlador para borrar un registro -------------------------* //
  // ?======================================================================================== //
  delete: (_req: Request, res: Response) => {
    res.send('Este es el controlador de restaurant delete')
  }
}
