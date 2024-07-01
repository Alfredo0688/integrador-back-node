const  db = require ("./data/db.js");

const express = require ("express");

const app = express();

const cors = require ("cors"); //Intercambio de recursos de origen cruzado

const port = 3030;

//Modulo propio para el ruteo
const PostRouter = require ("./routes/PostRouter.js");

app.use(cors()); //habilito el intercambio de información
app.use(express.json()) //analiza los request

//Modularizando mediante el use

app.use("/posteos", PostRouter)

app.get("/",(request, response)=>{
    response.send("Bienvenido al Home");
})


app.get("/conocenos",(request, response)=>{
    response.send("Sección conocenos");
})

//Función asíncrona que comprueba la conexión
const conexionDB = async ()=>{
    try {
        await db.authenticate();
        console.log("Conectado a la base de datos");        
    } catch (error) {
        console.log(`El error es : ${error}`)
    }
}


app.listen(port,()=>{
    conexionDB(); //llamo a la función asíncrona
    console.log(`Server corriendo en el puerto ${port}`)
})
