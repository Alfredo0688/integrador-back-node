const {crearPedido,obtenerPedido,obtenerPedidos,editarPedido,borrarPedido} = require("../controllers/pedidoController")

const express =require("express")
const router = express.Router();
router.get("/",obtenerPedidos)
router.get("/:id",obtenerPedido)
router.post("/",crearPedido)
router.put("/:id",editarPedido)
router.delete("/:id",borrarPedido)

module.exports = router