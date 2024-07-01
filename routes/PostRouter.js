const express = require ("express")

const router = express.Router();

const {traeUnPosteo, traePosteos} = require ("../controllers/PostController.js")

/*
router.get("/",(request,response)=>{
    response.send("GET POSTEOS")
});
*/

//aqui como se invoca desde posteos la ruta base implicita es localhost:puerto/posteos
router.get("/",traePosteos);





module.exports = router;