document.addEventListener("DOMContentLoaded", () => {

  const bodyTablaCategoria = document.querySelector("#bodyTablaCategoria");
  const formulario = document.querySelector("#formCategoria");

  const fetchCategoria = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/categorias/`);
      const categorias = respuesta.data;

      bodyTablaCategoria.innerHTML = "";
      categorias.forEach((categoria) => {
        // creo una nueva fila
        const fila = document.createElement("tr");
        //Crear celdas para titulo, contenido y acciones
        const celdaNombre = document.createElement("td");
        const celdaAcciones = document.createElement("td");

        // asignar el contenido de las celdas
        celdaNombre.textContent = categoria.nombre;

        // crear el boton para editar un posteo
        const botonEditar = document.createElement("button");
        botonEditar.classList.add("btn");
        botonEditar.classList.add("btn-warning");
        botonEditar.classList.add("ml-1");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
           //Redirigir a la pagina de edicion  con el ID del post en la url
           window.location.href = `categoriaEditar.html?id=${categoria.id}`;
        });

        // crear el boton de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-danger");
        botonEliminar.classList.add("mr-2");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
          borraCategoria(categoria.id);
        });

        // agregar los botones a la celda de acciones
        celdaAcciones.appendChild(botonEliminar);
        celdaAcciones.appendChild(botonEditar);

        // agregamos las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaAcciones);

        // Agregar la fila al cuerpo de la tabla
        bodyTablaCategoria.appendChild(fila);
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategoria();

  //agregar categoria
  formulario.addEventListener("submit", async (event)=>{
    try {
        event.preventDefault();
        const nuevaCategoria={
            nombre:document.querySelector("#nombre").value
        }
        const respuesta = await axios.post(`http://localhost:3030/categorias/`,nuevaCategoria)
        console.log(respuesta);
        fetchCategoria();
    } catch (error) {
        console.log(error)
    }
  })


  // funcion para eliminar unposteo
  const borraCategoria = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/categoria/${id}`);
      // recargare la lista de posteos despues de elminar
      fetchCategoria();
    } catch (error) {
      console.error(`Error al eliminar el post : ${error}`);
    }
  };
});
