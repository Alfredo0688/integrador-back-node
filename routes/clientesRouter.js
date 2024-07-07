

const express = require ("express");

const {obtenerClientes,crearCliente,obtenerCliente,editarCliente,borrarCliente}=require("../controllers/clientesController.js");

const router = express.Router();

router.get("/:id",obtenerCliente)
router.get("/",obtenerClientes)
router.post("/",crearCliente)
router.put("/:id",editarCliente);
router.delete("/:id",borrarCliente);

module.exports = router;


