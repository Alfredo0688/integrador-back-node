const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.onload = () => {
  //al usarse este archivo para todas las pantallas, dará error cuando no encuentre los elementos referenciados

  document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let textarea = document.getElementById("textarea").value;
    //crear una funcion que valide la existencia de contenido en todas las variables
    if (!validarCampos(nombre, apellido, email, textarea)) {
      console.log("Datos invalidos");
      let respuesta = document.getElementById("respuesta");
      respuesta.innerHTML = `<h4 id="estiloResponseError">Por favor complete todos los campos</h4>`;
    } else {
      limpiarCampos(nombre, apellido, email, textarea);
      let respuesta = document.getElementById("respuesta");
      respuesta.innerHTML = `<h4 id="estiloResponseValido">Campos enviados</h4>`;
    }
  });
};

let validarCampos = (nombre, apellido, email, textarea) => {
  return (
    nombre.length > 3 &&
    apellido.length > 3 &&
    email.length > 3 &&
    textarea.length > 3
  );
};

let limpiarCampos = (nombre, apellido, email, textarea) => {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textarea").value = "";
};
