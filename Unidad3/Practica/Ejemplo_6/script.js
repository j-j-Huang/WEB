let columnas = ["ID", "Nombre", "Edad", "Ciudad"];

let datos = [

    [1, "Carlos", 25, "Madrid"],

    [2, "Ana", 30, "Barcelona"],

    [3, "Luis", 28, "Valencia"]

];
let tabla = document.getElementById("tabla");

 

// Crear fila de encabezado

let thead = document.createElement("thead");

let encabezado = document.createElement("tr");

columnas.forEach(columna => {

    let th = document.createElement("th");

    th.textContent = columna;

    encabezado.appendChild(th);

});

thead.appendChild(encabezado);

tabla.appendChild(thead);

 

// Crear filas de datos

let tbody = document.createElement("tbody");

datos.forEach(fila => {

    let tr = document.createElement("tr");

    fila.forEach(dato => {

        let td = document.createElement("td");

        td.textContent = dato;

        tr.appendChild(td);

    });

    tbody.appendChild(tr);

});

tabla.appendChild(tbody);