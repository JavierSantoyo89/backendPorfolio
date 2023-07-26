"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const mainController = {
    index: (req, res) => {
        // res.send('jala')
        // res.render('index')
        res.status(200).json({ Total: 100 });
    },
    notfound: (_req, res) => {
        res.render("not-found");
        // res.send('No existe este sitio, animal!!!')
    },
};
exports.default = mainController;
//# sourceMappingURL=mainController.js.map