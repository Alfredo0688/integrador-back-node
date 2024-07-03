const express = require("express");
const cors = require("cors");
const db = require("./data/db.js")
const usuarioControlador = require("./routes/usuariosRouter.js");
const categoriasController = require("./routes/categoriasRouter.js");
const productoController = require("./routes/productosRouter.js");
const app = express();
const port = 3030;

app.get("/",(req,res)=>{
  res.send(`PAGINA DE INICIO`);
})

app.use(cors()) // habilito el intercambio de información
app.use(express.json()) // analiza los request
app.use("/usuario",usuarioControlador);
app.use("/categoria",categoriasController);
app.use("/producto",productoController);


app.listen(port,()=>{
      conexionDB()
      console.log(`Servidor Ok en el puerto ${port}`);
})

// conexion a la base de datos

const conexionDB = async ()=>{
  try {
      await db.authenticate()
      console.log(`Conectado Ok a la Base de datos`);
  } catch (error) {
      console.log(`Hay un error y es el siguiente : ${error}`);
  }
}