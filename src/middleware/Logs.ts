import { prisma } from "../db";
var dateActual = new Date();
// var CRUDtype:string = "";
// var dataQuerys: any = null;
// var ErrorQuery: any = null

export interface ILogs {
  TableName: string,
  CRUDtype: string,
  dataQuerys: any,
  ErrorQuery: any,
  data: Datum[]
  }

interface Datum {
  status: string
  crud: string
  table: string
  project: string
}

export function Logs(
  TableName: string,
  CRUDtype: string,
  dataQuerys: any,
  ErrorQuery: any,
) {
  console.log(TableName);

  async function main(TableName: string, dataQuerys: any) {
    dataQuerys;
    console.log("entro al main");
    console.log(TableName);
  }
  main(TableName, dataQuerys)
    .then(async () => {
      const ok  = await prisma.tbl_statistics.create({
        data : {
          status: "Ok" as any,
          crud: CRUDtype as any,
          table: TableName as any,
          project: "Metal-Mecanica" as any,
          datetime: dateActual,
        } as any,
      });
      console.log(ok);
      await prisma.$disconnect();
    })
    .catch(async () => {
      ErrorQuery;
      const fail = await prisma.tbl_statistics.create({
        data: {
          status: "Fail" as any,
          crud: CRUDtype  as any,
          table: TableName as any,
          project: "Metal-Mecanica" as any,
          datetime: dateActual,
        } as any,
      });
      console.log(fail);
      await prisma.$disconnect();
    });
}
