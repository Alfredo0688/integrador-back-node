const express = require("express")
const {obtenerCategorias,crearCategoria,editarCategoria,borrarCategoria,obtenerCategoria}=require("../controllers/categoriasController")


const router = express.Router();
router.get("/",obtenerCategorias)
router.get("/:id",obtenerCategoria)
router.post("/",crearCategoria)
router.put("/:id",editarCategoria)
router.delete("/:id",borrarCategoria)

module.exports = router