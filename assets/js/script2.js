let caja = document.getElementById("caja");

let seleccion = document.getElementById("colores");

seleccion.addEventListener('click', function (event) {

    let elemento = event.target;
    console.log(elemento);

    if (elemento.type == "button") {
        console.log(elemento.style.backgroundColor);
        color = elemento.style.backgroundColor;
        console.log(color);
        caja.style.backgroundColor = color;
    }
});
