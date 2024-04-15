import { Request, Response } from 'express'
import {prisma} from '../db'

const mainController = {
  // ?---------------------------------------------------------------------------------------- //
  // *------------- Controladores para el index y documentacion de los proyectos ------------* //
  // ?======================================================================================== //
  index: (_req: Request, res: Response) => {
    // res.send('Este es el controlador del index')
    res.render('indexMain.ejs')
  },
  Privacidad: (_req: Request, res: Response) => {
    res.render('privacidad.ejs')
  },
  Agradecimiento: (_req: Request, res: Response) => {
    res.render('agradecimiento.ejs')
  },
  search: (_req: Request, res: Response) => {
    res.send('Pendiente el crear el search')
  },
  stadistics: async(_req: Request, res: Response) => {
    async function main() {
      const allStadistics = await prisma.tbl_statistics.findMany();
      const countStadistics = await prisma.tbl_statistics.count()
      res.json({ data: allStadistics, count: countStadistics, SearchAll: "Ok" }).status(200);
      console.log("Read all stadistics complete!!!");
    }
    main()
      .then(async () => { })
      .catch(async (e) => { console.error(e) })
    }
}

export default mainController
