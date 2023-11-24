import { Request, Response } from "express";
import { prisma } from "../db";
var dateActual = new Date();
var CRUDtype:string = "";
var TableName: string = "";
var dataQuerys: any = null;
var ErrorQuery: any = null
var Id: any = null;

//*------------
function Logs(TableName: string) {
  console.log(TableName);

  async function main(TableName: string, dataQuerys: any) {
    dataQuerys;
    console.log("entro al main");
    
  console.log(TableName);
  }
  main(TableName, dataQuerys)
    .then(async () => {
      const ok = await prisma.tblstadistics.create({
        data: {
          status: "Ok",
          crud: CRUDtype,
          table: TableName,
          project: "Metal-Mecanica",
          datetime: dateActual,
        },
      });
      console.log(ok);
      await prisma.$disconnect();
    })
    .catch(async () => {
      ErrorQuery;
      const fail = await prisma.tblstadistics.create({
        data: {
          status: "Fail",
          crud: CRUDtype,
          table: TableName,
          project: "Metal-Mecanica",
          datetime: dateActual,
        },
      });
      console.log(fail);
      await prisma.$disconnect();
    });
} 

export const metalMecanicaController = {
  index: (_req: Request, res: Response) => {
    // ?---------------------------------------------------------------------------------------- //
    // *------------------- Controladores para el proyecto de metal mecanica ------------------* //
    // ?======================================================================================== //
    res.render("indexMetalMecanica");
  },

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Client ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createClient: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblclient"; 
    Logs(TableName);  
  dataQuerys = res.json({
    data: await prisma.tblclient.create({
          data: req.body,}),create:"OK",}).status(200);
  
  },

  // *----------------- Controlador para leer todos los registros de client --------------* //
  readAllClient: async (_req: Request, res: Response) => {
    TableName = "tblclient";
    CRUDtype = "Read all records";
    dataQuerys = res
      .json({
        data: await prisma.tblclient.findMany(),
        count: await prisma.tblclient.count(),
        SearchAll: "Ok",
      })
      .status(200);
    Logs(TableName);
  },

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneClient: async (req: Request, res: Response) => {
    CRUDtype = "Read only one record";
    TableName = "tblclient";
   let Id = req.params.id;

    var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)){
          dataQuerys = res.json({data: await prisma.tblclient.findFirst({where: { id_client: Number(Id) },}),findOne: "Ok"}).status(200);
          Logs(TableName);
        } else {
          ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
       } 
  },

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneClient: async (req: Request, res: Response) => {
    CRUDtype = "Deleted record ";
    TableName = "tblclient";
    Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
    if (Id.match(valoresAceptados)) {
      let Id = +req.params.id;
      dataQuerys = res.json({
          data: await prisma.tblclient.delete({
            where: { id_client: Number(Id) },
          }),
          delete: "Ok",
        })
        .status(200);
      Logs(TableName);
    } else {
      // Si el valor no es numerico
      ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
    }
  },

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateClient: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblclient";
    Id = req.params.id;

        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
         
        dataQuerys = res.json({
          data: await prisma.tblclient.update({
            where: { id_client: Number(Id) },
            data: req.body,
          }),
          findOne: "Ok", 
        })
        .status(200);
        Logs(TableName); 
      } else {
        // Si el valor no es numerico
        ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
    }
  },

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Employee ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createEmployee: async (req: Request, res: Response) => {
    dataQuerys = res.json({
      data: await prisma.tblemployee.create({
        data: req.body,}),create:"OK",}).status(200);
        Logs(TableName);  
  },

  // *----------------- Controlador para leer todos los registros de employee --------------* //
  readAllEmployee: async (_req: Request, res: Response) => {
    TableName = "tblemployee";
    CRUDtype = "Read all records";
    dataQuerys = res
      .json({
        data: await prisma.tblemployee.findMany(),
        count: await prisma.tblemployee.count(),
        SearchAll: "Ok",
      })
      .status(200);
    Logs(TableName);
  },

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneEmployee: async (req: Request, res: Response) => {
    TableName = "tblemployee";
    CRUDtype = "Read only one record";
    let Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)){
          dataQuerys = res.json({data: await prisma.tblemployee.findFirst({where: { id_employee: Number(Id) },}),findOne: "Ok"}).status(200);
          Logs(TableName);
        } else {
          ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
       } 
  },

  // *------------------------- Controlador para borrar un registro ------------------------* //
  deleteOneEmployee: async (req: Request, res: Response) => {
    TableName = "tblemployee";
    CRUDtype = "Delete one record";
    Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
    if (Id.match(valoresAceptados)) {
      let Id = +req.params.id;
      dataQuerys = res.json({
          data: await prisma.tblemployee.delete({
            where: { id_employee: Number(Id) },
          }),
          delete: "Ok",
        })
        .status(200);
      Logs(TableName);
    } else {
      // Si el valor no es numerico
      ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
    }
  },

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateEmployee: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblemployee";
    Id = req.params.id;

        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
         
        dataQuerys = res.json({
          data: await prisma.tblemployee.update({
            where: { id_employee: Number(Id) },
            data: req.body,
          }),
          Update: "Ok", 
        })
        .status(200);
        Logs(TableName); 
      } else {
        // Si el valor no es numerico
        ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
    }
  },

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Process ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro process ------------------* //
  createProcess: async (req: Request, res: Response) => {
    dataQuerys = res.json({
      data: await prisma.tblprocess.create({
        data: req.body,}),create:"OK",}).status(200);
        Logs(TableName);  
  },

  // *----------------- Controlador para leer todos los registros de process --------------* //
  readAllProcess: async (_req: Request, res: Response) => {
    TableName = "tblprocess";
    CRUDtype = "Read all records";
    dataQuerys = res
      .json({
        data: await prisma.tblprocess.findMany(),
        count: await prisma.tblprocess.count(),
        SearchAll: "Ok",
      })
      .status(200);
    Logs(TableName);
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro de process --------------* //
  readOneProcess: async (req: Request, res: Response) => {
    TableName = "tblprocess";
    CRUDtype = "Read only one record";
    let Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados) && Number(Id)>0){
          dataQuerys = res.json({data: await prisma.tblprocess.findFirst({where: { id_process: Number(Id) },}),findOne: "Ok"}).status(200);
          Logs(TableName);
        } else {
          ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(400)
       } 
  },
  //* =====================================================================================* //

  // *----------------------- Controlador para borrar un registro de process --------------* //
  deleteOneProcess: async (req: Request, res: Response) => {
    TableName = "tblprocess";
    CRUDtype = "Delete one record";
    Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
    if (Id.match(valoresAceptados)) {
      let Id = +req.params.id;
      dataQuerys = res.json({
          data: await prisma.tblprocess.delete({
            where: { id_process: Number(Id) },
          }),
          delete: "Ok",
        })
        .status(200);
      Logs(TableName);
    } else {
      // Si el valor no es numerico
      ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
    }
  },

  // *---------------------- Controlador para actualizar un registro de process -----------* //
  updateProcess: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblprocess";
    Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
        dataQuerys = res.json({
          data: await prisma.tblprocess.update({
            where: { id_process: Number(Id) },
            data: req.body,
          }),
          Update: "Ok", 
        })
        .status(200);
        Logs(TableName); 
      } else {
        // Si el valor no es numerico
        ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
    }
  },

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Product ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createProduct: async (req: Request, res: Response) => {
    dataQuerys = res.json({
      data: await prisma.tblproduct.create({
        data: req.body,}),create:"OK",}).status(200);
        Logs(TableName);  
  },

  // *----------------- Controlador para leer todos los registros de product --------------* //
  readAllProduct: async (_req: Request, res: Response) => {
    TableName = "tblProduct";
    CRUDtype = "Read all records";
    dataQuerys = res
      .json({
        data: await prisma.tblproduct.findMany(),
        count: await prisma.tblproduct.count(),
        SearchAll: "Ok",
      })
      .status(200);
    Logs(TableName);
  },

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneProduct: async (req: Request, res: Response) => {
    TableName = "tblproduct";
    CRUDtype = "Read only one record";
    let Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)){
          dataQuerys = res.json({data: await prisma.tblproduct.findFirst({where: { id_product: Number(Id) },}),findOne: "Ok"}).status(200);
          Logs(TableName);
        } else {
          ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
       } 
  },

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneProduct: async (req: Request, res: Response) => {
    TableName = "tblproduct";
    CRUDtype = "Delete one record";
    Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
    if (Id.match(valoresAceptados)) {
      let Id = +req.params.id;
      dataQuerys = res.json({
          data: await prisma.tblproduct.delete({
            where: { id_product: Number(Id) },
          }),
          delete: "Ok",
        })
        .status(200);
      Logs(TableName);
    } else {
      // Si el valor no es numerico
      ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
    }
  },

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateProduct: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblproduct";
    Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
        dataQuerys = res.json({
          data: await prisma.tblproduct.update({
            where: { id_product: Number(Id) },
            data: req.body,
          }),
          Update: "Ok", 
        })
        .status(200);
        Logs(TableName); 
      } else {
        // Si el valor no es numerico
        ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
    }
  },

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section bill ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro bill ------------------* //
  createFacture: async (req: Request, res: Response) => {
    dataQuerys = res.json({
      data: await prisma.tblbill.create({
        data: req.body,}),create:"OK",}).status(200);
        Logs(TableName);
  },

  // *----------------- Controlador para leer todos los registros de bill --------------* //
  readAllFacture: async (_req: Request, res: Response) => {
    TableName = "tblbill";
    CRUDtype = "Read all records";
    dataQuerys = res
      .json({
        data: await prisma.tblbill.findMany(),
        count: await prisma.tblbill.count(),
        SearchAll: "Ok",
      })
      .status(200);
    Logs(TableName);
  },

  // *------------------------- Controlador para leer un registro de bill-------------------------* //
  readOneFacture: async (req: Request, res: Response) => {
    TableName = "tblbill";
    CRUDtype = "Read only one record";
    let Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)){
          dataQuerys = res.json({data: await prisma.tblbill.findFirst({where: { id_bill: Number(Id) },}),findOne: "Ok"}).status(200);
          Logs(TableName);
        } else {
          ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
       } 
  },

  // *------------------------- Controlador para leer un registro de bill ------------------------* //
  deleteOneFacture: async (req: Request, res: Response) => {
    TableName = "tblbill";
    CRUDtype = "Delete one record";
    Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
    if (Id.match(valoresAceptados)) {
      let Id = +req.params.id;
      dataQuerys = res.json({
          data: await prisma.tblbill.delete({
            where: { id_bill: Number(Id) },
          }),
          delete: "Ok",
        })
        .status(200);
      Logs(TableName);
    } else {
      // Si el valor no es numerico
      ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
    }
  },

  // *---------------------- Controlador para actualizar un registro de bill ----------------------* //
  updateFacture: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblbill";
    Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados && Id>0)) {
        dataQuerys = res.json({
          data: await prisma.tblbill.update({
            where: { id_bill: Number(Id) },
            data: req.body,
          }),
          Update: "Ok", 
        })
        .status(200);
        Logs(TableName); 
      } else {
        // Si el valor no es numerico
        ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(400)
    }
  },

  
  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section History process ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro bill ------------------* //
  createHistory: async (req: Request, res: Response) => {
    dataQuerys = res.json({
      data: await prisma.tblhistoryprocess.create({
        data: req.body,}),create:"OK",}).status(200);
        Logs(TableName);
  },

  // *----------------- Controlador para leer todos los registros de bill --------------* //
  readAllHistory: async (_req: Request, res: Response) => {
    TableName = "tbltblhistoryprocess";
    CRUDtype = "Read all records";
    dataQuerys = res
      .json({
        data: await prisma.tblhistoryprocess.findMany(),
        count: await prisma.tblhistoryprocess.count(),
        SearchAll: "Ok",
      })
      .status(200);
    Logs(TableName);
  },

  // *------------------------- Controlador para leer un registro de bill-------------------------* //
  readOneHistory: async (req: Request, res: Response) => {
    TableName = "tblhistoryprocess";
    CRUDtype = "Read only one record";
    let Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)){
          dataQuerys = res.json({data: await prisma.tblhistoryprocess.findFirst({where: { id_history_process: Number(Id) },}),findOne: "Ok"}).status(200);
          Logs(TableName);
        } else {
          ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404)
       } 
  },

  // *------------------------- Controlador para leer un registro de bill ------------------------* //
  deleteOnehistory: async (req: Request, res: Response) => {
    TableName = "tblhistoryprocess";
    CRUDtype = "Delete one record";
    Id = req.params.id;
    var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
    if (Id.match(valoresAceptados)) {
      let Id = +req.params.id;
      dataQuerys = res.json({
          data: await prisma.tblhistoryprocess.delete({
            where: { id_history_process: Number(Id) },
          }),
          delete: "Ok",
        })
        .status(200);
      Logs(TableName);
    } else {
      // Si el valor no es numerico
      ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
    }
  },

  // *---------------------- Controlador para actualizar un registro de bill ----------------------* //
  updateHistory: async (req: Request, res: Response) => {
    CRUDtype = "Update record ";
    TableName = "tblhistoryprocess";
    Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados && Id>0)) {
        dataQuerys = res.json({
          data: await prisma.tblhistoryprocess.update({
            where: { id_history_process: Number(Id) },
            data: req.body,
          }),
          Update: "Ok", 
        })
        .status(200);
        Logs(TableName); 
      } else {
        // Si el valor no es numerico
        ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(400)
    }

},
}
