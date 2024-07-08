const btnFiltro = document.querySelector(".btnFiltre");
const asideDesplegable = document.querySelector(".asideDesplegable");
btnFiltro.addEventListener("click", () => {
  asideDesplegable.classList.toggle("active");
});

const cartelDesplegable = document.querySelector(".cartelDeplegable");
const titulosDeplegables = [
  "3 Cuotas sin Interes",
  "Envío gratis a partir de $40,000.00",
  "Todas las tarjetas",
];
i=0;
setInterval(()=>{
    
    if(i==3){
        i=0;
    }
    const element = titulosDeplegables[i];
    cartelDesplegable.innerText = element;
    cartelDesplegable.classList.toggle('move');
    i=i+1;
 
},4000);