const express = require("express");

const {obtenerEstado,obtenerEstados,crearEstado,editarEstado,eliminarEstado} = require ("../controllers/estadoController.js");

const router = express.Router();

router.get("/",obtenerEstados);
router.get("/:id", obtenerEstado);
router.post("/", crearEstado);
router.put("/:id",editarEstado);
router.delete("/:id",eliminarEstado);

module.exports = router