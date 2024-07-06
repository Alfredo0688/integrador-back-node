document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formProducto");

  const bodyTablaProducto = document.querySelector("#tablaProducto");

  const fetchProductos = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/productos/`);
      const productos = respuesta.data;
      tablaProducto.innerHTML = "";
      productos.forEach(producto => {
        // creo una nueva fila
        const fila = document.createElement("tr");
        //Crear celdas para titulo, contenido y acciones
        const celdaNombre = document.createElement("td");
        const celdaMarca = document.createElement("td");
        const celdaModelo = document.createElement("td");
        const celdaCantidad = document.createElement("td");
        const celdaUrlImagen = document.createElement("td");

        // asignar el contenido de las celdas
        celdaNombre.textContent = producto.nombre;
        celdaMarca.textContent = producto.marca;
        celdaModelo.textContent = producto.modelo;
        celdaCantidad.textContent = producto.cantidad;
        celdaUrlImagen.textContent = producto.foto;

        // crear el boton para editar un posteo
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
          // Redirigir a la pagina de edicion  con el ID del post en la url
          //window.location.href = `edit.html?id=${posteo.id}`;
        });

        // crear el boton de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
          //borrarProducto(producto.id);
        });

        // agregar los botones a la celda de acciones
        celdaAcciones.appendChild(botonEliminar);
        celdaAcciones.appendChild(botonEditar);

        // agregamos las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaMarca);
        fila.appendChild(celdaModelo);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaUrlImagen);

        // Agregar la fila al cuerpo de la tabla
        bodyTablaProducto.appendChild(fila);
      });
    } catch (error) {
      console.error (`Error al obtener los post : ${error}`)
    }
  };
  // Funcion para crear un nuevo Producto
  formulario.addEventListener("submit",async function(event){
    event.preventDefault();
    const nuevoProducto = {
        nombre:document.querySelector("#nombre").value,
        marca : document.querySelector("#marca").value,
        modelo:document.querySelector("#modelo").value,
        precio:document.querySelector("#precio").value,
        foto:document.querySelector("#imagen").value,
        id_categoria:1
    };
    try {
      await axios.post(`http://localhost:3030/productos/`,nuevoProducto)
        //limpiamos el formulario
        formCrearPosteo.reset()
        // recargue los posteos actualizado
        fetchProductos()
    } catch (error) {
      console.error (`Error al postear: ${error}`)
    }
  })

  fetchProductos();
});
