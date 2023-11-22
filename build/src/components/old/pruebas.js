"use strict";
// import { prisma } from "../db";
// let dateActual =  new Date()
// export default function ReadAllTable(TextoEntrada:string) {
// export default async function main() { 
//     dateActual
//         }
//         main()
//         .then(async () => {
//            prisma.tblstadistics.create({ data: { status: "Ok", crud: "Read all", table: TableName, project: "Metal-Mecanica", datetime: dateActual }})
//         })
//         .catch(async () => {
//             await prisma.tblstadistics.create({ data: { status: "Fail", crud: "Read All", table: TableName, project: "Metal-Mecanica", datetime: dateActual }, }) 
//           await prisma.$disconnect()
//         });
// }
//   readAllEmployee: {
//     ReadAllTable("tblEmployee")
//   }
// //* --- Funciona busqueda por ID
// import { Request, Response } from "express";
// import { prisma } from "../db";
// var dateActual = new Date();
// var TableName:string = "";
// var dataQuerys: any = null;
// var ErrorQuery: any = null;
// //*------------
// function Logs(TableName: any) {
//   console.log(TableName);
//   async function main(TableName: string, dataQuerys: any) {
//     dataQuerys;
//     console.log(TableName);
//   }
//   main(TableName, dataQuerys)
//     .then(async () => {
//       // console.log("Jalo el escribir: " + dataQuerys );
//       const ok = await prisma.tblstadistics.create({
//         data: {
//           status: "Ok",
//           crud: "Read all",
//           table: TableName,
//           project: "Metal-Mecanica",
//           datetime: dateActual,
//         },
//       });
//       console.log(ok);
//       await prisma.$disconnect();
//     })
//     .catch(async () => {
//       // console.log("error al escribir" + dataQuerys);
//       ErrorQuery;
//       await prisma.tblstadistics.create({
//         data: {
//           status: "Fail",
//           crud: "Read All",
//           table: TableName,
//           project: "Metal-Mecanica",
//           datetime: dateActual,
//         },
//       });
//       await prisma.$disconnect();
//     });
// }
//*---------
//   readAllEmployee: {
//     let nameTable = "tblemployee"
//     let RealAllTable = nameTable ? console.log("funcionaria con tble employee") : console.log("funciona pero no donde quiero");
//  }
