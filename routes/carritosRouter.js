const express = require("express")
const {obtenerCarrito,obtenerCarritos,editarCarrito,borrarCarrito,crearCarrito}=require("../controllers/carritoController")


const router = express.Router();
router.get("/",obtenerCarritos)
router.get("/:id",obtenerCarrito)
router.post("/",crearCarrito)
router.put("/:id",editarCarrito)
router.delete("/:id",borrarCarrito)

module.exports = router