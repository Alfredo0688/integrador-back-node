const express = require("express");
const cors = require("cors");
const db = require("./data/db.js")
const app = express();
const port = 3030;
const usuarioRouter = require("./routes/usuariosRouter.js");
const categoriasRouter = require("./routes/categoriasRouter.js");
const productoRouter = require("./routes/productosRouter.js");
const detallePedidoRouter = require("./routes/detalleCategoriaRouter.js");
const pedidoRouter = require("./routes/pedidoRouter.js");
const carritoRouter = require("./routes/carritosRouter.js");
const clienteRouter = require("./routes/clientesRouter.js");
const estadoRouter = require("./routes/estadoRouter.js");
const coloresRouter = require("./routes/coloresRouter.js");
const comentariosRouter = require("./routes/comentariosRouter.js");

const bodyParser = require("body-parser") // middleware para manejar solicitudes
app.use(bodyParser.json()) // parsear datos en formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // toma los datos en formato URL-encoded y los configura

app.listen(port, () => {
  conexionDB()
  console.log(`Servidor Ok en el puerto ${port}`);
})

// conexion a la base de datos

const conexionDB = async () => {
  try {
    await db.authenticate()
    console.log(`Conectado Ok a la Base de datos`);
  } catch (error) {
    console.log(`Hay un error y es el siguiente : ${error}`);
  }
}

app.use(cors()) // habilito el intercambio de información
app.use(express.json()) // analiza los request
app.use("/usuarios", usuarioRouter);
app.use("/categorias", categoriasRouter);
app.use("/productos", productoRouter);
app.use("/detalle_pedidos", detallePedidoRouter);
app.use("/pedidos", pedidoRouter);
app.use("/carritos", carritoRouter);
app.use("/clientes", clienteRouter);
app.use("/estado", estadoRouter);
app.use("/colores", coloresRouter);
app.use("/comentarios",comentariosRouter);
