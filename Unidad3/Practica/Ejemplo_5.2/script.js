let botonColor = document.getElementById("cambiarColor");
let caja = document.getElementById("caja");

botonColor.addEventListener("click", function() {
    let colores = ["red", "green", "blue", "yellow", "purple"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    caja.style.backgroundColor = colorAleatorio;
});