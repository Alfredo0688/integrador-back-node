const express = require("express")
const  {obtenerProductos,crearProducto,obtenerProducto,editarProducto,borrarProducto,obtenerProductoPorCategoria} =require("../controllers/productosController")

const router = express.Router()

router.get("/",obtenerProductos);
router.get("/:id",obtenerProducto);
router.get("/categoria/:id_categoria",obtenerProductoPorCategoria);
router.post("/",crearProducto);
router.put("/:id",editarProducto);
router.delete("/:id",borrarProducto);

module.exports = router