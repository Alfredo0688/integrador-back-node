document.addEventListener("DOMContentLoaded", () => {
  //obtener los parametros de la URL
  const parametrosURL = new URLSearchParams(window.location.search);
  // obtener el id de post que queremos editar
  //http://127.0.0.1:5501/CLASES/Clase33/FRONT/edit.html?id=1
  const idCategoria = parametrosURL.get("id");

  const formulario = document.querySelector("#formCategoria");

  const fechCategoria = async (idCategoria) => {

    try {
        const respuesta = await axios.get (`http://localhost:3030/categorias/${idCategoria}`);
        const categoria = respuesta.data;
        console.log(categoria);
        document.querySelector("#nombre").value=categoria.nombre
    } catch (error) {
        console.log(error);
    }
  };
  if(idCategoria){
    fechCategoria(idCategoria);
  }

  formulario.addEventListener("submit",async(event)=>{
      try {
        event.preventDefault();
        const nuevaCategoria={
            nombre:document.querySelector("#nombre").value
        }
          const respueta = await axios.put(`http://localhost:3030/categorias/${idCategoria}`,nuevaCategoria)
          window.location.href=`categorias.html`;
      } catch (error) {
        console.log(error);
      }
  })
  
});
