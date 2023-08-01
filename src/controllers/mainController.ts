import { Request, Response, NextFunction } from "express"

const toThousand = (n: { toString: () => string }) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const mainController = {
  index: (req: Request, res: Response) => {
    // res.send('jala')
    res.render('index')

    // res.status(200).json({ Total: 100 })
  },
  notfound: (_req: Request, res: Response) => {
    res.render("not-found")
    // res.send('No existe este sitio, animal!!!')
  },
  total: (req: Request, res: Response) => {
    // res.send('jala')
    // res.render('index')
    res.status(200).json({ Total: 100 })
  },
}

export default mainController
