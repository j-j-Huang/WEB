let botonAgregar = document.getElementById("agregar");

let botonEliminar = document.getElementById("eliminar");

let contenedor = document.getElementById("contenedor");

 

botonAgregar.addEventListener("click", function() {

    let nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = "Párrafo dinámico";

    contenedor.appendChild(nuevoParrafo);

});

 

botonEliminar.addEventListener("click", function() {

    if (contenedor.lastChild) {

        contenedor.removeChild(contenedor.lastChild);

    }

});