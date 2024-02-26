
let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    limpiar();

    let nombre = validar((document.getElementById("nombre").value), "nombre")
    let asunto = validar((document.getElementById("asunto").value), "asunto")
    let mensaje = validar((document.getElementById("mensaje").value), "mensaje")

    console.log(nombre, asunto, mensaje);

    if (nombre && asunto && mensaje) {
        exito();
    }

});

function limpiar() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function validar(valor, param) {
    console.log(valor, param);

    let validacionValor = /^[a-zA-Z]+$/; /* Permite ingresar solo letras mayus y min de la A a la Z
    /*
    /*  /^          la cadena debe comenzar con el patron que viene a continuacion
    /*  [a-zA-Z]+   "+" indica que el patron anterior aparece una o mas veces para que el string sea valido 
    /*  $/          indica el final del texto a buscar, termina con el patron anterior([a-zA-Z]) 
    */

    if (validacionValor.test(valor) == false) {
        if (param == "nombre") {
            document.querySelector(".errorNombre").innerHTML = ("El nombre es requerido, ingrese un nombre válido.");
            return false;
        } else if (param == "asunto") {
            document.querySelector(".errorAsunto").innerHTML = ("El asunto es requerido, ingrese un asunto válido.");
            return false;
        } else if (param == "mensaje") {
            document.querySelector(".errorMensaje").innerHTML = ("El mesaje es requerido, ingrese un mensaje válido.");
            return false;
        }
    } else {
        return true;
    }
};

function exito() {
    document.querySelector(".resultado").innerHTML = ("Formulario Enviado con éxito");
};




