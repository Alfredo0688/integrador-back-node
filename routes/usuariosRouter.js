const express = require("express");


//controladores 
const {crearUsuario,obtenerUsuarios,editarUsuario,borrarUsuario} = require("../controllers/usuarioController")

/* configuracion de rutas express // metodos de HTTP */

const router = express.Router();
router.get("/",obtenerUsuarios)
router.post("/",crearUsuario)
router.put("/:id", editarUsuario);
router.delete("/:id", borrarUsuario);

module.exports = router

