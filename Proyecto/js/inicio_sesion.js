document.addEventListener("DOMContentLoaded", ()=>{
    console.log("pantalla inicio sesión working");


    //traemos todos los registros de la tabla usuarios
    const traerUsuarios = async ()=>{
        try {
            const usuarios = await axios.get("http://localhost:3030/categorias");
        console.log(usuarios.data);
    
        } catch (error) {
            console.log(`se encontró el siguiente error ${error.message}`)
        }
        


    }

    traerUsuarios();
})