import { prisma } from "../db";
var dateActual = new Date();
// var CRUDtype:string = "";
// var dataQuerys: any = null;
// var ErrorQuery: any = null

export function Logs(
  TableName: string,
  CRUDtype: string,
  dataQuerys: any,
  ErrorQuery: any
) {
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
