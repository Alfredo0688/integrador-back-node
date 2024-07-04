const express = require("express")
const {obtenerDetallePedido,crearDetallePedido,obtenerDetallePedidos,editarDetallePedido,borrarDetallePedido}=require("../controllers/detallePedidoController")


const router = express.Router();
router.get("/",obtenerDetallePedidos)
router.get("/:id",obtenerDetallePedido)
router.post("/",crearDetallePedido)
router.put("/:id",editarDetallePedido)
router.delete("/:id",borrarDetallePedido)

module.exports = router