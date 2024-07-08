const express = require ("express");

const {obtenerComentarios,obtenerComentario,crearComentario,editarComentario,eliminarComentario} = require ("../controllers/comentariosController.js");

const router = express.Router();


router.get("/",obtenerComentarios);
router.get("/:id", obtenerComentario);
router.post("/", crearComentario);
router.put("/:id",editarComentario);
router.delete("/:id",eliminarComentario);

module.exports = router