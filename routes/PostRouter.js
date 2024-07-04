const express = require ("express")

const router = express.Router();

const {traeUnPosteo, traePosteos, crearPosteo, actualizarPosteo, eliminarPosteo} = require ("../controllers/PostController.js")

/*
router.get("/",(request,response)=>{
    response.send("GET POSTEOS")
});
*/

//aqui como se invoca desde posteos la ruta base implicita es localhost:puerto/posteos
router.get("/",traePosteos);

//el id es un nombre que defino aquí y será usado en la función controladora
router.get("/:id", traeUnPosteo);

router.post("/", crearPosteo);

router.put("/:id", actualizarPosteo)

router.delete("/:id", eliminarPosteo)


module.exports = router;