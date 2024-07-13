const express = require("express");


//controladores 
const {obtenerUsuarios,obtenerUsuario,crearUsuario,editarUsuario,borrarUsuario} = require("../controllers/usuarioController")

/* configuracion de rutas express // metodos de HTTP */

const router = express.Router();
router.get("/:id", obtenerUsuario);
router.get("/",obtenerUsuarios)
router.post("/",crearUsuario)
router.put("/:id", editarUsuario);
router.delete("/:id", borrarUsuario);

module.exports = router

