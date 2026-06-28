
//Modo Oscuro
const boton=document.getElementById("btn-modo");
const icono = document.getElementById("icono-modo");

boton.addEventListener("click",()=>{
    document.body.classList.toggle("Modo-oscuro");
    icono.classList.toggle("bi-moon-fill");
    icono.classList.toggle("bi-sun-fill");

})