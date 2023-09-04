import { Request, Response } from "express";
import { prisma } from "../db";
function readAll(Tbl: String) {
  console.log(Tbl);

  // (_req: Request, res: Response) => {
  //     async function main() {

  //       const Data = await prisma.tblclient.findMany()

  //       // const employee = await prisma.tblemployee.findMany({ });

  //       res.json(
  //         {data:Data,
  //           SearchAll: 'Ok'
  //         }).status(200)
  //         console.log(Data);
  //       }

  //     main()
  //       .then(async () => {
  //         // await prisma.$disconnect();
  //       })
  //       .catch(async (e) => {
  //         console.error(e);
  //         // await prisma.$disconnect();
  //         // process.exit(1);
  //       });
  // }
}
export const metalMecanicaController = {
  Prueba: (req: Request, res: Response) => {
    readAll("prueba");
    const teclado = req.params.id;
    console.log(teclado);

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
  createClient: (req: Request, res: Response) => {
    async function main() {
      let UserName = req.params.UserName;
      let UserType = req.params.UserType;
      const insertEmployee = await prisma.tblemployee.create({
        data: {
          user_name: UserName,
          user_type: UserType,
        },
      });
      res.json().status(200);
      console.log(insertEmployee);
    }

    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });

    // res.send('Este es el controlador de metal-mecanica create')
  },
  //* =====================================================================================* //

  // *----------------- Controlador para leer todos los registros de employee --------------* //
  readAllClient: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica read");
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneClient: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneClient: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateClient: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica update");
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
      res.json({insertEmployee,Created: "Ok"}).status(200);
      console.log("Create employee complete!!!");
    }
    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // *----------------- Controlador para leer todos los registros de employee --------------* //
  readAllEmployee: async (_req: Request, res: Response) => {
    async function main() {
      const employeeAll = await prisma.tblemployee.findMany();
      const countEmployee = await prisma.tblemployee.count()
      res.json({ data: employeeAll, count: countEmployee, SearchAll: "Ok" }).status(200);
      console.log("Read all employees complete!!!");
    }
    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        // await prisma.$disconnect();
        // process.exit(1);
      });
  },

  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneEmployee: async (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const readIdEmploye = await prisma.tblemployee.findFirst({
        where: {id_employee: Number(id)},
      });
      res.json({readIdEmploye,findOne: "Ok"}).status(200);
      console.log("Read only employee complete!!!");
    }
    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para borrar un registro ------------------------* //
  deleteOneEmployee: async(req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const deleteEmploye = await prisma.tblemployee.delete({
        where: {id_employee: Number(id)}
      });
      res.json({deleteEmploye, delete: "Ok"}).status(200);
      console.log("Delete employee complete!!!");
    }
    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateEmployee: (req: Request, res: Response) => {
    async function main() {
      const id = parseInt(req.params.id);
      const updateIdEmploye = await prisma.tblemployee.update({
        where: {id_employee: id},data: req.body,
      });
      res.json({updateIdEmploye, updateEmployee: "Ok"}).status(200);
      console.log("Update employee complete!!!");
    }
    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Process ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createProcess: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *----------------- Controlador para leer todos los registros de employee --------------* //
  readAllProcess: (_req: Request, res: Response) => {
    async function main() {
      const employee = await prisma.tblemployee.findMany({});
      
      res.json({ data: employee, SearchAll: "Ok" }).status(200);
      console.log(employee);
    }

    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneProcess: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneProcess: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateProcess: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica update");
  },
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Product ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createProduct: (req: Request, res: Response) => {
    async function main() {
      const user = req.body.userName;
      const type = req.body.userType;
      const employee = await prisma.tblemployee.create({
        data: {
          user_name: user,
          user_type: type,
        },
      });
      res.json().status(200);
      // res.json(
      //   {data:employee,
      //     Insert: 'Ok'
      //   }).status(200)
      console.log(employee);
    }

    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });

    // res.send('Este es el controlador de metal-mecanica create')
  },
  //* =====================================================================================* //

  // *----------------- Controlador para leer todos los registros de employee --------------* //
  readAllProduct: async(_req: Request, res: Response) => {
    // res.send('Este es el controlador de metal-mecanica read')

    res.json;

    async function main() {
      const employee = await prisma.tblemployee.findMany({});
      
      res.json({ data: employee, SearchAll: "Ok" }).status(200);
      console.log(employee);
    }

    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneProduct: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneProduct: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateProduct: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica update");
  },
  //* =====================================================================================* //

  // ?---------------------------------------------------------------------------------------- //
  //*  -------------------------------- CRUD section Facture ------------------------------- *//
  // ?---------------------------------------------------------------------------------------- //

  // *----------------- Controlador para crear un nuevo registro employee ------------------* //
  createFacture: (req: Request, res: Response) => {
    async function main() {
      const user = req.body.userName;
      const type = req.body.userType;
      const employee = await prisma.tblemployee.create({
        data: {
          user_name: user,
          user_type: type,
        },
      });
      res.json().status(200);
      // res.json(
      //   {data:employee,
      //     Insert: 'Ok'
      //   }).status(200)
      console.log(employee);
    }

    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });

    // res.send('Este es el controlador de metal-mecanica create')
  },
  //* =====================================================================================* //

  // *----------------- Controlador para leer todos los registros de employee --------------* //
  readAllFacture: (_req: Request, res: Response) => {
    // res.send('Este es el controlador de metal-mecanica read')

    res.json;

    async function main() {
      const employee = await prisma.tblemployee.findMany({});

      res.json({ data: employee, SearchAll: "Ok" }).status(200);
      console.log(employee);
    }

    main()
      .then(async () => {
        // await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro -------------------------* //
  readOneFacture: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *------------------------- Controlador para leer un registro ------------------------* //
  deleteOneFacture: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica create");
  },
  //* =====================================================================================* //

  // *---------------------- Controlador para actualizar un registro ----------------------* //
  updateFacture: (_req: Request, res: Response) => {
    res.send("Este es el controlador de metal-mecanica update");
  },
  //* =====================================================================================* //
};
