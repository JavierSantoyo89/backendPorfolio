// import { Request, Response } from "express";
// import { prisma } from "../db";

// let dateActual =  new Date()


// export const RuteCRUD ={


// udpate:
//   async (_req: Request, res: Response) => {
//     // let FindMany ='await prisma.tblemployee.findMany()'
//     // let Count ="await prisma.tblemployee.count()"
//     // let Table = 'tblemployee'
//     // main(FindMany:String, Count:String, Table:String)
//     async function main(FindMany:string, Count:any) {
//       const employeeAll = FindMany
//       const countEmployee = Count
//       res.json({ data: employeeAll, count: countEmployee, SearchAll: "Ok" }).status(200);
//       console.log("Read all employees complete!!!");
//     }

    
//     main(FindMany,Table)
//     .then(async () => {
//       const insertStadistics = await prisma.tblstadistics.create({
//         data: {
//           status: "Ok",
//           crud: "Read all",
//           table: Table,
//           project: "Metal-Mecanica",
//           datetime: dateActual
//         },
//       })
//       res.json().status(200);
//       console.log(insertStadistics);
//     })
//     .catch(async () => {
//       const insertStadistics = await prisma.tblstadistics.create({
//         data: {
//           status: "Fail",
//           crud: "Read All",
//           table: Table,
//           project: "Metal-Mecanica",
//           datetime: dateActual
//         },
//       })  
//       console.log(insertStadistics);
//       res.json("Revisa si ingresaste los datos correctos").status(404)
//       await prisma.$disconnect()
//     });
//   }
// }

// const FindsTodo = async function main(EmployeeAll:any,CountEmployee:any) {
//   const employeeAll = EmployeeAll
//   const countEmployee = CountEmployee
//   console.log("Read all employees complete!!!");
//   return{
//     employeeAll, countEmployee
//   }
// }
// main()
// .then(async () => {
//   prisma.tblstadistics.create({
//     data: {
//       status: "Ok",
//       crud: "Read all",
//       table: "tblemployee",
//       project: "Metal-Mecanica",
//       datetime: dateActual
//     },
//   })
// })
// .catch(async () => {
//   await prisma.tblstadistics.create({
//     data: {
//       status: "Fail",
//       crud: "Read All",
//       table: "tblemployee",
//       project: "Metal-Mecanica",
//       datetime: dateActual
//     },
//   })
//   res.json("Revisa si ingresaste los datos correctos").status(404)
//   await prisma.$disconnect()
// });

// async (_req: Request, _res: Response) => {
//   let tabla = 'tblemployee'
//   const EmployeeAll = await prisma.${tabla}.findMany();
//   const CountEmployee = await prisma.tblemployee.count()
//   FindsTodo(EmployeeAll,CountEmployee)
//   res.json({ data: employeeAll, count: countEmployee, SearchAll: "Ok" }).status(200);
// }