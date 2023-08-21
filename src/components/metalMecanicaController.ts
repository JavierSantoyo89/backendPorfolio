export const metalMecanicaController = {
  index: (_req: any, res: any) => {
  // ?---------------------------------------------------------------------------------------- //
  // *------------------- Controladores para el proyecto de metal mecanica ------------------* //
  // ?======================================================================================== //
    res.render('indexMetalMecanica')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para crear un nuevo registro ----------------------* //
  // ?======================================================================================== //
  create: (_req: any, res: any) => {
    res.send('Este es el controlador de metal-mecanica create')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para leer todos los registros ---------------------* //
  // ?======================================================================================== //
  read: (_req: any, res: any) => {
    res.send('Este es el controlador de metal-mecanica read')
  },

  // ?---------------------------------------------------------------------------------------- //
  // *----------------------- Controlador para actualizar un registro -----------------------* //
  // ?======================================================================================== //
  update: (_req: any, res: any) => {
    res.send('Este es el controlador de metal-mecanica update')
  },
  // ?---------------------------------------------------------------------------------------- //
  // *------------------------- Controlador para borrar un registro -------------------------* //
  // ?======================================================================================== //
  delete: (_req: any, res: any) => {
    res.send('Este es el controlador de metal-mecanica delete')
  }
}
