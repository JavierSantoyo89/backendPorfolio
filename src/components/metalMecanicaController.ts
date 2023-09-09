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
  Prueba: async (_req: Request, res: Response) => {
    res.send("Este es el controlador de prueba");
  },

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
  //* =====================================================================================* //

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
  //* =====================================================================================* //

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
  //* =====================================================================================* //

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
  //* =====================================================================================* //

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
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Employee ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createEmployee: async (req: Request, res: Response) => {
    async function main() {
      const insertEmployee = await prisma.tblemployee.create({
        data: req.body,
      });
      res.json({ insertEmployee, Created: "Ok" }).status(200);
      console.log("Create employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Create",
            table: "tblemployee",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Create",
            table: "tblemployee",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

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
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneEmployee: async (req: Request, res: Response) => {
    TableName = "tblemployee";
    CRUDtype = "Read only one record";
    Id = req.params.id;
    dataQuerys = res
      .json({
        data: await prisma.tblemployee.findFirst({
          where: { id_employee: +Id },
        }),
        findOne: "Ok",
      })
      .status(200);
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para borrar un registro ------------------------* //
  deleteOneEmployee: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const deleteEmploye = await prisma.tblemployee.delete({
        where: { id_employee: Number(id) },
      });
      res.json({ deleteEmploye, delete: "Ok" }).status(200);
      console.log("Delete employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Delete",
            table: "tblemployee",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Delete",
            table: "tblemployee",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateEmployee: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const updateIdEmploye = await prisma.tblemployee.update({
        where: { id_employee: id },
        data: req.body,
      });
      res.json({ updateIdEmploye, updateEmployee: "Ok" }).status(200);
      console.log("Update employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Update",
            table: "tblemployee",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Update",
            table: "tblemployee",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Process ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro process ------------------* //
  createProcess: async (req: Request, res: Response) => {
    async function main() {
      const insertProcess = await prisma.tblprocess.create({
        data: req.body,
      });
      res.json({ insertProcess, Created: "Ok" }).status(200);
      console.log("Create employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Create",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Create",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

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
    async function main() {
      const id = parseInt(req.params.id);
      const readIdProcess = await prisma.tblprocess.findFirst({
        where: { id_process: Number(id) },
      });
      res.json({ readIdProcess, findOne: "Ok" }).status(200);
      console.log("Read only employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Read one",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Read one",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *----------------------- Controlador para borrar un registro de process --------------* //
  deleteOneProcess: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const deleteProcess = await prisma.tblprocess.delete({
        where: { id_process: Number(id) },
      });
      res.json({ deleteProcess, delete: "Ok" }).status(200);
      console.log("Delete employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Delete",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Delete",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro de process -----------* //
  updateProcess: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const updateIdProcess = await prisma.tblprocess.update({
        where: { id_process: id },
        data: req.body,
      });
      res.json({ updateIdProcess, updateEmployee: "Ok" }).status(200);
      console.log("Update employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Update",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Update",
            table: "tblprocess",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Product ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createProduct: async (req: Request, res: Response) => {
    async function main() {
      const insertProduct = await prisma.tblproduct.create({
        data: req.body,
      });
      res.json({ insertProduct, Created: "Ok" }).status(200);
      console.log("Create product complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Create",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Create",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

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
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneProduct: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const readIdPtoduct = await prisma.tblproduct.findFirst({
        where: { id_product: Number(id) },
      });
      res.json({ readIdPtoduct, findOne: "Ok" }).status(200);
      console.log("Read only employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Read one",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Read one",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneProduct: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const deleteProduct = await prisma.tblproduct.delete({
        where: { id_product: Number(id) },
      });
      res.json({ deleteProduct, delete: "Ok" }).status(200);
      console.log("Delete product complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Delete",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Delete",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateProduct: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const updateIdProduct = await prisma.tblproduct.update({
        where: { id_product: id },
        data: req.body,
      });
      res.json({ updateIdProduct, updateEmployee: "Ok" }).status(200);
      console.log("Update employee complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Update",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Update",
            table: "tblproduct",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section bill ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro bill ------------------* //
  createFacture: async (req: Request, res: Response) => {
    async function main() {
      const insertBill = await prisma.tblbill.create({
        data: req.body,
      });
      res.json({ insertBill, Created: "Ok" }).status(200);
      console.log("Create bill complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Create",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async (e) => {
        console.error(e);
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Create",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

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
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro de bill-------------------------* //
  readOneFacture: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const readIdBill = await prisma.tblbill.findFirst({
        where: { id_bill: Number(id) },
      });
      res.json({ readIdBill, findOne: "Ok" }).status(200);
      console.log("Read only bill complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Read one",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Read one",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro de bill ------------------------* //
  deleteOneFacture: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const deleteBill = await prisma.tblbill.delete({
        where: { id_bill: Number(id) },
      });
      res.json({ deleteBill, delete: "Ok" }).status(200);
      console.log("Delete bill complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Delete",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async (e) => {
        console.error(e);
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Delete",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro de bill ----------------------* //
  updateFacture: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const updateIdBill = await prisma.tblbill.update({
        where: { id_bill: id },
        data: req.body,
      });
      res.json({ updateIdBill, updateEmployee: "Ok" }).status(200);
      console.log("Update Bill complete!!!");
    }
    main()
      .then(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Ok",
            crud: "Update",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        res.json().status(200);
        console.log(insertStadistics);
      })
      .catch(async () => {
        const insertStadistics = await prisma.tblstadistics.create({
          data: {
            status: "Fail",
            crud: "Update",
            table: "tblbill",
            project: "Metal-Mecanica",
            datetime: dateActual,
          },
        });
        console.log(insertStadistics);
        res.json("Revisa si ingresaste los datos correctos").status(404);
        await prisma.$disconnect();
      });
  },
  //* =====================================================================================* //
};
