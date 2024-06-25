const express = require ("express");

const app = express();

const port = 3030;

app.get("/",(request, response)=>{
    response.send("Bienvenido al Home");
})

app.get("/conocenos",(request, response)=>{
    response.send("Sección conocenos");
})


app.listen(port,()=>{
    console.log(`Server corriendo en el puerto ${port}`)
})
