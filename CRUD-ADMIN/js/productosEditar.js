document.addEventListener("DOMContentLoaded", () => {
  //obtener los parametros de la URL
  const parametrosURL = new URLSearchParams(window.location.search);
  // obtener el id de post que queremos editar
  //http://127.0.0.1:5501/CLASES/Clase33/FRONT/edit.html?id=1
  const idproducto = parametrosURL.get("id");

  const formulario = document.querySelector("#formProducto");
  const selectCategoria = document.querySelector("#slc_categoria");
  const selectColor = document.querySelector("#slc_color");

  const fechproducto = async (idproducto) => {
    try {
      const respuesta = await axios.get(
        `http://localhost:3030/productos/${idproducto}`
      );
      const producto = respuesta.data;
      document.querySelector("#nombre").value = producto.nombre;
      document.querySelector("#marca").value = producto.marca;
      document.querySelector("#modelo").value = producto.modelo;
      document.querySelector("#imagen").value = producto.foto;
      document.querySelector("#precio").value = producto.precio;
      document.querySelector("#cantidad").value = producto.cantidad;
      //const colores = document.querySelector("#slc_color");
      // Recorre las opciones del select
      
      // Recorrer las opciones del select
      for (let i = 0; i < selectColor.options.length; i++) {
        let option = selectColor.options[i];
        // Verifica si esta es la opción que deseas seleccionar
        if (option.value == producto.id_color) {
          option.selected = true; // Marca esta opción como seleccionada
          break; // Sale del bucle porque ya encontró la opción
        }
      }

      // Recorrer las opciones del select
      for (let i = 0; i < selectCategoria.options.length; i++) {
        let option = selectCategoria.options[i];
        // Verifica si esta es la opción que deseas seleccionar
        if (option.value == producto.id_categoria) {
          option.selected = true; // Marca esta opción como seleccionada
          break; // Sale del bucle porque ya encontró la opción
        }
      }
      console.log(producto);
    } catch (error) {
      console.log(error);
    }
  };

  formulario.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const nuevoProducto = {
        nombre: document.querySelector("#nombre").value,
        marca: document.querySelector("#marca").value,
        modelo: document.querySelector("#modelo").value,
        cantidad: document.querySelector("#cantidad").value,
        precio: document.querySelector("#precio").value,
        id_color: document.querySelector("#slc_color").value,
        foto: document.querySelector("#imagen").value,
        id_categoria: document.querySelector("#slc_categoria").value,
      }
      const respueta = await axios.put(
        `http://localhost:3030/productos/${idproducto}`,
        nuevoProducto
      );
      window.location.href = `productos.html`;
    } catch (error) {
      console.log(error);
    }
  });

  //cargar select categoria
  const fetchCategoria = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/categorias/`);
      const categorias = respuesta.data;
      selectCategoria.innerHTML = "";
      selectCategoria.innerHTML = `<option> SELECCIONAR </option>`;
      categorias.forEach((categoria) => {
        const optional = document.createElement(`option`);
        optional.textContent = categoria.nombre;
        optional.value = categoria.id;
        selectCategoria.appendChild(optional);
      });
    } catch (error) {
      console.error(`Error al postear: ${error}`);
    }
  };

  //cargar select colores
  const fetchColores = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/colores/`);
      const coleres = respuesta.data;
      selectColor.innerHTML = "";
      selectColor.innerHTML = `<option> SELECCIONAR </option>`;
      coleres.forEach((color) => {
        const optional = document.createElement(`option`);
        optional.textContent = color.nombre;
        optional.value = color.id;
        selectColor.appendChild(optional);
      });
    } catch (error) {
      console.error(`Error al postear: ${error}`);
    }
  };
  if (idproducto) {
    fetchCategoria();
    fetchColores();
    fechproducto(idproducto);
  }
});
