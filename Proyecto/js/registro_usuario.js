
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#form_registroUsuario").addEventListener("submit", (evento) => {
        evento.preventDefault();
        console.log("clickeaste el btn");

        //los campos clave del objeto deben ser igual a los del modelo
        const credencialesUsuario = {
            usuario: document.getElementById("nombre_usuario").value,
            contrasenia: document.getElementById("clave").value
        }

        //registrar primero el usuario
        const crearUsuario = async () => {
            try {
                const usuario = await axios.post("http://localhost:3030/usuarios/", credencialesUsuario);
                dataUsuario = usuario.data;//obtenemos como respuesta el user creado recientemente
                
                await axios.post("http://localhost:3030/clientes/", {
                    nombre: document.getElementById("nombre").value,
                    apellido: document.getElementById("apellido").value,
                    email: document.getElementById("email").value,
                    telefono: document.getElementById("telefono").value,
                    direccion: document.getElementById("direccion").value,
                    codigo_postal: document.getElementById("codigo_postal").value,
                    provincia: document.getElementById("provincia").value,
                    id_usuario: dataUsuario.id//obtenemos el id del usuario para enviarlo como FK del cliente
                });

            } catch (error) {
                if(error.response&&error.response.status===422){
                    const errores = error.response.data.errores; //si hay errores de validacion , los guardo
                    let mensajesdeError = "<ul>";
                    
                    errores.forEach(error =>{
                    /*     console.log(error); */
                        mensajesdeError+=`<li>${error.msg}</li>`// muestro cada error en una lista
                    })
                    mensajesdeError += "</ul>";
                     document.querySelector("#mensajesValidacion").innerHTML=mensajesdeError //muetra los error en el HTML
                    
                    }else {
                        console.error(`Error en la solicitud "${error.message}`) // si hay otro tipo de error lo mostralo en consola
                    }
            }

        }
        crearUsuario();

    })

});