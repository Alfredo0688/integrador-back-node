const express = require("express")
const  {obtenerProductos,crearProducto,obtenerProducto,editarProducto,borrarProducto} =require("../controllers/productosController")

const router = express.Router()

router.get("/",obtenerProductos);
router.get("/:id",obtenerProducto);
router.post("/",crearProducto);
router.put("/:id",editarProducto);
router.post("/:id",borrarProducto);

module.exports = router