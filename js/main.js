
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

const formulario = document.getElementById("form-contacto");
const mensaje = document.getElementById("mensaje-formulario");
if(formulario){
    formulario.addEventListener("submit", function (e){
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const texto = document.getElementById("mensaje").value.trim();

        if (nombre ==="" || email === "" || texto === "" ){
            mensaje.textContent = "Todos los campos son obligatorios.";
            mensaje.style.color = "red";
            return;
        }

        mensaje.textContent = "¡Mensaje Enviado Correctamente!";
        mensaje.style.color = "green";
        
        formulario.reset();

    });
}