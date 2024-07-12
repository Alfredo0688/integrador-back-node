
document.addEventListener("DOMContentLoaded", ()=>{
    
    document.querySelector("#form_registroUsuario").addEventListener("submit",(evento)=>{
        evento.preventDefault();
        console.log("clickeaste el btn");

        const credencialesUsuario = {
            nombre_usuario : document.getElementById("nombre_usuario").value,
            clave : document.getElementById("clave").value
        }

        console.log(credencialesUsuario)
        //encriptar el pass

        //registrar primero el usuario
        const crearUsuario = async ()=>{
            try {
                await axios.post("http://localhost:3030/usuarios/",credencialesUsuario)
            } catch (error) {
                console.error(`se ha producido el siguiente error al intentar crear un usuario : ${error.message}`)
            }
            
        }
        crearUsuario();
        //la fk del user necesitamos para registrar el cliente


        //crear el post
    })

});