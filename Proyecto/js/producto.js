document.addEventListener("DOMContentLoaded", () => {
  const parametrosURL = new URLSearchParams(window.location.search);
  // obtener el id de post que queremos editar
  //http://127.0.0.1:5501/CLASES/Clase33/FRONT/edit.html?id=1
  const idproducto = parametrosURL.get("id");

  const btnFiltro = document.querySelector(".btnFiltre");
  const asideDesplegable = document.querySelector(".asideDesplegable");
  btnFiltro.addEventListener("click", () => {
    asideDesplegable.classList.toggle("active");
  });

  const ulCategoria = document.querySelector("#ulCategoria");
  const contenedorProducto = document.querySelector("#contenedorProducto");
  const lstMarca = document.querySelector("#lst_nombres");
  //cargar listado categoria
  const fetchCategorias = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/categorias/`);
      const categorias = respuesta.data;
      ulCategoria.innerHTML = "";
      ulCategoria.classList.add("w-100");
      categorias.forEach((categoria) => {
        const li = document.createElement(`li`);
        const a = document.createElement(`a`);
        a.href = "#";
        a.onclick = function () {
          fetchProductoCat(categoria.id);
        };
        a.textContent = categoria.nombre.toUpperCase();
        li.classList.add("mt-3");
        li.appendChild(a);
        ulCategoria.appendChild(li);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //cargar listado producto
  const fetchProductos = async (e) => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/productos/`);
      const productos = respuesta.data;
      settearProductos(productos);
      settearMarcas(productos);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductoCat = async (e) => {
    try {
      console.log(e);
      const respuesta = await axios.get(
        `http://localhost:3030/productos/categoria/${e}`
      );
      const productos = respuesta.data;
      settearProductos(productos);
      settearMarcas(productos);
    } catch (error) {
      console.log(error);
    }
  };

  const settearProductos = (productos) => {
    contenedorProducto.innerHTML = "";
    let divProductos = "";
    productos.forEach((producto) => {
      divProductos =
        divProductos +
        `<div class="cardProducto">
              <div class="cardalertProd">
                  <p class="alertProdDesc">-50%</p>
              </div>
              <div class="cardImagen">
                  <img src=${producto.foto} alt="${
          producto.nombre
        }" width="" class='img-thumbnail'>
              </div>
              <div class="cardDetalle">
                  <span class="tituloProducto">${producto.nombre}</span>
                  <div class="w-100 cardPrecios mb-2">
                      <p class="precioProducto">$${
                        producto.precio.toLocaleString() * 0.5
                      } </p>
                      <p class="precioOriginal">$${producto.precio.toLocaleString()}</p>
                  </div>
                  <span class="titleCuotas mb-1">3 Coutas sin interes de $ 1,666.67</span>
              </div>
              <div class="cardButton">
                  <button class="">COMPRAR</button>
              </div>
          </div>`;
    });
    contenedorProducto.innerHTML = divProductos;
  };
  const obtenerProductoMarca=(e)=>{
    alert(e);
  }

  const settearMarcas = (productos) => {
    const agrupados = productos.reduce((acumulador, elemento) => {
      const marca = elemento.marca;

      // Si ya existe la clave en el acumulador, incrementa el contador
      if (acumulador.has(marca)) {
        acumulador.set(marca, acumulador.get(marca) + 1);
      } else {
        // Si no existe, inicializa el contador en 1
        acumulador.set(marca, 1);
      }
      return acumulador;
    }, new Map());
    lstMarca.innerHTML = "";
    let elementosRadio="";
    for (let [clave, valor] of agrupados) {
      elementosRadio =
        elementosRadio +
       `
        <div>
                        <input type="radio" name="opcion" onchange="obtenerProductoMarca()"><label for="">${clave
                          .toUpperCase()
                          .trim()} (${valor})</label>
                    </div>
      `;
    }
    lstMarca.innerHTML=elementosRadio;
  };

 
  const cartelDesplegable = document.querySelector(".cartelDeplegable");
  const titulosDeplegables = [
    "3 Cuotas sin Interes",
    "Envío gratis a partir de $40,000.00",
    "Todas las tarjetas",
  ];
  i = 0;
  setInterval(() => {
    if (i == 3) {
      i = 0;
    }
    const element = titulosDeplegables[i];
    cartelDesplegable.innerText = element;
    cartelDesplegable.classList.toggle("move");
    i = i + 1;
  }, 4000);

  fetchCategorias();
  fetchProductos();
});
