let leerMas = document.getElementById("leerMas");

let textoCompleto = document.getElementById("textoCompleto");

let textoCorto = document.getElementById("textoCorto");

 

leerMas.addEventListener("click", function(event) {

    event.preventDefault(); // Evita el salto de página

    if (textoCompleto.style.display === "none") {

        textoCompleto.style.display = "block";

        textoCorto.style.display = "none";

        leerMas.textContent = "Leer menos";

    } else {

        textoCompleto.style.display = "none";

        textoCorto.style.display = "block";

        leerMas.textContent = "Leer más";

    }

});