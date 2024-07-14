const express = require("express");


//express validator
const {check} = require("express-validator")
//controladores 
const {obtenerUsuarios,obtenerUsuario,crearUsuario,editarUsuario,borrarUsuario,logear} = require("../controllers/usuarioController")

/* configuracion de rutas express // metodos de HTTP */

const router = express.Router();
router.get("/:id", obtenerUsuario);
router.get("/",obtenerUsuarios)

//router.post("/",crearUsuario)
//express validator
router.post("/",[
    check("usuario").isLength({min:5}).withMessage("El nombre de usuario debe tener al menos 5 caracteres").trim(),
    check("contrasenia").isLength({min:7}).withMessage("La contraseña debe tener al menos 7 caracteres")
],crearUsuario)

router.put("/:id", editarUsuario);
router.delete("/:id", borrarUsuario);
router.get("/logearse", logear)

module.exports = router

