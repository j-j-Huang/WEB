let enlaces = document.querySelectorAll(".leerMas");

 

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(event) {

        event.preventDefault(); // Evita que la página recargue

        let contenedor = this.parentElement;

        let textoCorto = contenedor.querySelector(".textoCorto");

        let textoCompleto = contenedor.querySelector(".textoCompleto");

       

        if (textoCompleto.style.display === "none") {

            textoCompleto.style.display = "block";

            textoCorto.style.display = "none";

            this.textContent = "Leer menos";

        } else {

            textoCompleto.style.display = "none";

            textoCorto.style.display = "block";

            this.textContent = "Leer más";

        }

    });

});