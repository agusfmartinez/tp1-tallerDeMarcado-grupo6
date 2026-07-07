
//Modo Oscuro
const boton=document.getElementById("btn-modo");
const icono = document.getElementById("icono-modo");

// verifica si el modo oscuro ya fue activado alguna vez
if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("Modo-oscuro");
    icono.classList.remove("bi-moon-fill");
    icono.classList.add("bi-sun-fill");
}

boton.addEventListener("click",()=>{
    document.body.classList.toggle("Modo-oscuro");
    icono.classList.toggle("bi-moon-fill");
    icono.classList.toggle("bi-sun-fill");

    if (document.body.classList.contains("Modo-oscuro")) {
        localStorage.setItem("modo", "oscuro");
    } else {
        localStorage.setItem("modo", "claro");
    }
})