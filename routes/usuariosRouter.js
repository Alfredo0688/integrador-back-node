const express = require("express");


//controladores 
const {crearUsuarios,obtenerUsuarios} = require("../controllers/usuarioController")

/* configuracion de rutas express // metodos de HTTP */

const router = express.Router();
router.get("/",obtenerUsuarios)
router.post("/",crearUsuarios)

module.exports = router

