const express =require("express");

//controller
const{obtenerTexto,obtenerId}=require("../controllers/nosotrosController");

/* configuracion de rutas express // metodos de HTTP */
const router = express.Router();
router.get("/",obtenerTexto);
router.get("/:id",obtenerId);

module.exports=router