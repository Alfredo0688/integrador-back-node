
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#form_registroUsuario").addEventListener("submit", (evento) => {
        evento.preventDefault();
        console.log("clickeaste el btn");

        //los campo clave del objeto deben ser igual a los del modelo
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
                console.error(`se ha producido el siguiente error al intentar crear un usuario : ${error.message}`)
            }

        }
        crearUsuario();

    })

});