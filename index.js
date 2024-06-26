const express = require ("express");

const app = express();

const cors = require ("cors"); //Intercambio de recursos de origen cruzado

const port = 3030;

app.use(cors()); //habilito el intercambio de información
app.use(express.json()) //analiza los request

app.get("/",(request, response)=>{
    response.send("Bienvenido al Home");
})

app.get("/conocenos",(request, response)=>{
    response.send("Sección conocenos");
})


app.listen(port,()=>{
    console.log(`Server corriendo en el puerto ${port}`)
})
