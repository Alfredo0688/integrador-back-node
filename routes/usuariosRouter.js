const express = require("express");


//controladores 
const {crearUsuarios,obtenerUsuarios,editarUsuario,borrarUsuario} = require("../controllers/usuarioController")

/* configuracion de rutas express // metodos de HTTP */

const router = express.Router();
router.get("/",obtenerUsuarios)
router.post("/",crearUsuarios)
router.put("/:id", editarUsuario);
router.delete("/:id", borrarUsuario);

module.exports = router

