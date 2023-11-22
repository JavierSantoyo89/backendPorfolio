"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metalMecanicaController = void 0;
const db_1 = require("../db");
var dateActual = new Date();
var CRUDtype = "";
var TableName = "";
var dataQuerys = null;
var ErrorQuery = null;
var Id = null;
//*------------
function Logs(TableName) {
    console.log(TableName);
    function main(TableName, dataQuerys) {
        return __awaiter(this, void 0, void 0, function* () {
            dataQuerys;
            console.log("entro al main");
            console.log(TableName);
        });
    }
    main(TableName, dataQuerys)
        .then(() => __awaiter(this, void 0, void 0, function* () {
        const ok = yield db_1.prisma.tblstadistics.create({
            data: {
                status: "Ok",
                crud: CRUDtype,
                table: TableName,
                project: "Metal-Mecanica",
                datetime: dateActual,
            },
        });
        console.log(ok);
        yield db_1.prisma.$disconnect();
    }))
        .catch(() => __awaiter(this, void 0, void 0, function* () {
        ErrorQuery;
        const fail = yield db_1.prisma.tblstadistics.create({
            data: {
                status: "Fail",
                crud: CRUDtype,
                table: TableName,
                project: "Metal-Mecanica",
                datetime: dateActual,
            },
        });
        console.log(fail);
        yield db_1.prisma.$disconnect();
    }));
}
exports.metalMecanicaController = {
    index: (_req, res) => {
        // ?---------------------------------------------------------------------------------------- //
        // *------------------- Controladores para el proyecto de metal mecanica ------------------* //
        // ?======================================================================================== //
        res.render("indexMetalMecanica");
    },
    // ?---------------------------------------------------------------------------------------- //
    //*  -------------------------------- CRUD section Client ------------------------------- *//
    // ?---------------------------------------------------------------------------------------- //
    // *----------------- Controlador para crear un nuevo registro employee ------------------* //
    createClient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Update record ";
        TableName = "tblclient";
        Logs(TableName);
        dataQuerys = res.json({
            data: yield db_1.prisma.tblclient.create({
                data: req.body,
            }), create: "OK",
        }).status(200);
    }),
    // *----------------- Controlador para leer todos los registros de client --------------* //
    readAllClient: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblclient";
        CRUDtype = "Read all records";
        dataQuerys = res
            .json({
            data: yield db_1.prisma.tblclient.findMany(),
            count: yield db_1.prisma.tblclient.count(),
            SearchAll: "Ok",
        })
            .status(200);
        Logs(TableName);
    }),
    // *------------------------- Controlador para leer un registro -------------------------* //
    readOneClient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Read only one record";
        TableName = "tblclient";
        let Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({ data: yield db_1.prisma.tblclient.findFirst({ where: { id_client: Number(Id) }, }), findOne: "Ok" }).status(200);
            Logs(TableName);
        }
        else {
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *------------------------- Controlador para leer un registro ------------------------* //
    deleteOneClient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Deleted record ";
        TableName = "tblclient";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            let Id = +req.params.id;
            dataQuerys = res.json({
                data: yield db_1.prisma.tblclient.delete({
                    where: { id_client: Number(Id) },
                }),
                delete: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *---------------------- Controlador para actualizar un registro ----------------------* //
    updateClient: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Update record ";
        TableName = "tblclient";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({
                data: yield db_1.prisma.tblclient.update({
                    where: { id_client: Number(Id) },
                    data: req.body,
                }),
                findOne: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // ?---------------------------------------------------------------------------------------- //
    //*  -------------------------------- CRUD section Employee ------------------------------- *//
    // ?---------------------------------------------------------------------------------------- //
    // *----------------- Controlador para crear un nuevo registro employee ------------------* //
    createEmployee: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        dataQuerys = res.json({
            data: yield db_1.prisma.tblemployee.create({
                data: req.body,
            }), create: "OK",
        }).status(200);
        Logs(TableName);
    }),
    // *----------------- Controlador para leer todos los registros de employee --------------* //
    readAllEmployee: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblemployee";
        CRUDtype = "Read all records";
        dataQuerys = res
            .json({
            data: yield db_1.prisma.tblemployee.findMany(),
            count: yield db_1.prisma.tblemployee.count(),
            SearchAll: "Ok",
        })
            .status(200);
        Logs(TableName);
    }),
    // *------------------------- Controlador para leer un registro -------------------------* //
    readOneEmployee: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblemployee";
        CRUDtype = "Read only one record";
        let Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({ data: yield db_1.prisma.tblemployee.findFirst({ where: { id_employee: Number(Id) }, }), findOne: "Ok" }).status(200);
            Logs(TableName);
        }
        else {
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *------------------------- Controlador para borrar un registro ------------------------* //
    deleteOneEmployee: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblemployee";
        CRUDtype = "Delete one record";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            let Id = +req.params.id;
            dataQuerys = res.json({
                data: yield db_1.prisma.tblemployee.delete({
                    where: { id_employee: Number(Id) },
                }),
                delete: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *---------------------- Controlador para actualizar un registro ----------------------* //
    updateEmployee: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Update record ";
        TableName = "tblemployee";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({
                data: yield db_1.prisma.tblemployee.update({
                    where: { id_employee: Number(Id) },
                    data: req.body,
                }),
                Update: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // ?---------------------------------------------------------------------------------------- //
    //*  -------------------------------- CRUD section Process ------------------------------- *//
    // ?---------------------------------------------------------------------------------------- //
    // *----------------- Controlador para crear un nuevo registro process ------------------* //
    createProcess: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        dataQuerys = res.json({
            data: yield db_1.prisma.tblprocess.create({
                data: req.body,
            }), create: "OK",
        }).status(200);
        Logs(TableName);
    }),
    // *----------------- Controlador para leer todos los registros de process --------------* //
    readAllProcess: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblprocess";
        CRUDtype = "Read all records";
        dataQuerys = res
            .json({
            data: yield db_1.prisma.tblprocess.findMany(),
            count: yield db_1.prisma.tblprocess.count(),
            SearchAll: "Ok",
        })
            .status(200);
        Logs(TableName);
    }),
    //* =====================================================================================* //
    // *------------------------- Controlador para leer un registro de process --------------* //
    readOneProcess: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblprocess";
        CRUDtype = "Read only one record";
        let Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados) && Number(Id) > 0) {
            dataQuerys = res.json({ data: yield db_1.prisma.tblprocess.findFirst({ where: { id_process: Number(Id) }, }), findOne: "Ok" }).status(200);
            Logs(TableName);
        }
        else {
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(400);
        }
    }),
    //* =====================================================================================* //
    // *----------------------- Controlador para borrar un registro de process --------------* //
    deleteOneProcess: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblprocess";
        CRUDtype = "Delete one record";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            let Id = +req.params.id;
            dataQuerys = res.json({
                data: yield db_1.prisma.tblprocess.delete({
                    where: { id_process: Number(Id) },
                }),
                delete: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *---------------------- Controlador para actualizar un registro de process -----------* //
    updateProcess: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Update record ";
        TableName = "tblprocess";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({
                data: yield db_1.prisma.tblprocess.update({
                    where: { id_process: Number(Id) },
                    data: req.body,
                }),
                Update: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // ?---------------------------------------------------------------------------------------- //
    //*  -------------------------------- CRUD section Product ------------------------------- *//
    // ?---------------------------------------------------------------------------------------- //
    // *----------------- Controlador para crear un nuevo registro employee ------------------* //
    createProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        dataQuerys = res.json({
            data: yield db_1.prisma.tblproduct.create({
                data: req.body,
            }), create: "OK",
        }).status(200);
        Logs(TableName);
    }),
    // *----------------- Controlador para leer todos los registros de product --------------* //
    readAllProduct: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblProduct";
        CRUDtype = "Read all records";
        dataQuerys = res
            .json({
            data: yield db_1.prisma.tblproduct.findMany(),
            count: yield db_1.prisma.tblproduct.count(),
            SearchAll: "Ok",
        })
            .status(200);
        Logs(TableName);
    }),
    // *------------------------- Controlador para leer un registro -------------------------* //
    readOneProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblproduct";
        CRUDtype = "Read only one record";
        let Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({ data: yield db_1.prisma.tblproduct.findFirst({ where: { id_product: Number(Id) }, }), findOne: "Ok" }).status(200);
            Logs(TableName);
        }
        else {
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *------------------------- Controlador para leer un registro ------------------------* //
    deleteOneProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblproduct";
        CRUDtype = "Delete one record";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            let Id = +req.params.id;
            dataQuerys = res.json({
                data: yield db_1.prisma.tblproduct.delete({
                    where: { id_product: Number(Id) },
                }),
                delete: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *---------------------- Controlador para actualizar un registro ----------------------* //
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Update record ";
        TableName = "tblproduct";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({
                data: yield db_1.prisma.tblproduct.update({
                    where: { id_product: Number(Id) },
                    data: req.body,
                }),
                Update: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // ?---------------------------------------------------------------------------------------- //
    //*  -------------------------------- CRUD section bill ------------------------------- *//
    // ?---------------------------------------------------------------------------------------- //
    // *----------------- Controlador para crear un nuevo registro bill ------------------* //
    createFacture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        dataQuerys = res.json({
            data: yield db_1.prisma.tblbill.create({
                data: req.body,
            }), create: "OK",
        }).status(200);
        Logs(TableName);
    }),
    // *----------------- Controlador para leer todos los registros de bill --------------* //
    readAllFacture: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblbill";
        CRUDtype = "Read all records";
        dataQuerys = res
            .json({
            data: yield db_1.prisma.tblbill.findMany(),
            count: yield db_1.prisma.tblbill.count(),
            SearchAll: "Ok",
        })
            .status(200);
        Logs(TableName);
    }),
    // *------------------------- Controlador para leer un registro de bill-------------------------* //
    readOneFacture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblbill";
        CRUDtype = "Read only one record";
        let Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/;
        if (Id.match(valoresAceptados)) {
            dataQuerys = res.json({ data: yield db_1.prisma.tblbill.findFirst({ where: { id_bill: Number(Id) }, }), findOne: "Ok" }).status(200);
            Logs(TableName);
        }
        else {
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *------------------------- Controlador para leer un registro de bill ------------------------* //
    deleteOneFacture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        TableName = "tblbill";
        CRUDtype = "Delete one record";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados)) {
            let Id = +req.params.id;
            dataQuerys = res.json({
                data: yield db_1.prisma.tblbill.delete({
                    where: { id_bill: Number(Id) },
                }),
                delete: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(404);
        }
    }),
    // *---------------------- Controlador para actualizar un registro de bill ----------------------* //
    updateFacture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CRUDtype = "Update record ";
        TableName = "tblbill";
        Id = req.params.id;
        var valoresAceptados = /^[0-9]+$/; // Si el valor en numerico
        if (Id.match(valoresAceptados && Id > 0)) {
            dataQuerys = res.json({
                data: yield db_1.prisma.tblbill.update({
                    where: { id_bill: Number(Id) },
                    data: req.body,
                }),
                Update: "Ok",
            })
                .status(200);
            Logs(TableName);
        }
        else {
            // Si el valor no es numerico
            ErrorQuery = res.json("Revisa si ingresaste los datos correctos").status(400);
        }
    }),
};
