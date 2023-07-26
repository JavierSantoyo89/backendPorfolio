import {Request, Response, NextFunction} from "express"
const toThousand = (n: { toString: () => string; }) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req: Request,res: Response) =>{
        // res.send('jala')
        res.render('index')
    },
    notfound: (_req: Request,res:Response) =>{
        res.render('not-found')
        // res.send('No existe este sitio, animal!!!')
    }
}

export default mainController