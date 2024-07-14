document.addEventListener("DOMContentLoaded", ()=>{
    console.log("pantalla inicio sesión working");

    document.getElementById("btn_login").addEventListener("click", logearse);

    //traemos todos los registros de la tabla usuarios
    const traerUsuarios = async ()=>{
        try {
            const usuarios = await axios.get("http://localhost:3030/usuarios");
        console.log(usuarios.data);
    
        } catch (error) {
            console.log(`se encontró el siguiente error ${error.message}`)
        }
        
    }  
})

//logearse
    const logearse = async ()=>{

        try {
            const credencialesLogeo = {
                usuario : document.getElementById("nombre_usuario").value,
                contrasenia : document.getElementById("clave").value
            }
            const response = await axios.get("http://localhost:3030/usuarios/logearse/",credencialesLogeo);
            console.log(response.data)
        } catch (error) {
            console.log("Error " + error.message)
        }
    }