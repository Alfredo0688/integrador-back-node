const express = require("express");
const cors = require("cors");
const db = require("./data/db.js")
const usuarioRouter = require("./routes/usuariosRouter.js");
const categoriasController = require("./routes/categoriasRouter.js");
const productoController = require("./routes/productosRouter.js");
const detallePedidoController = require("./routes/detalleCategoriaRouter.js");
const pedidoController=require("./routes/pedidoRouter.js");
const carritoController=require("./routes/carritosRouter.js");
const clienteRouter = require("./routes/clienteRouter.js");

const app = express();
const port = 3030;

app.get("/",(req,res)=>{
  res.send(`PAGINA DE INICIO`);
})



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

app.use(cors()) // habilito el intercambio de información
app.use(express.json()) // analiza los request
app.use("/usuarios",usuarioRouter);
app.use("/categorias",categoriasController);
app.use("/productos",productoController);
app.use("/detalle_pedidos",detallePedidoController);
app.use("/pedidos",pedidoController);
app.use("/carritos",carritoController);
app.use("/clientes",clienteRouter);
