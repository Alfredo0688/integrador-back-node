

const express = require("express")
const {obtenercliente,obtenerclientes,crearcliente,editarcliente,borrarcliente} = require("../controllers/clientesController.js");

const router = express.Router();

router.get("/:id",obtenercliente);
router.get("/",obtenerclientes);
router.post("/",crearcliente);
router.put("/:id", editarcliente);
router.delete("/:id", borrarcliente);

module.exports = router


