const express = require("express")
const {obtenerColor,crearColores,editarColores,borrarColores,obtenerColores}=require("../controllers/coloresControllers")


const router = express.Router();
router.get("/",obtenerColores)
router.get("/:id",obtenerColor)
router.post("/",crearColores)
router.put("/:id",editarColores)
router.delete("/:id",borrarColores)

module.exports = router