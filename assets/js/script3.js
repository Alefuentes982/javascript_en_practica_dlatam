
var sumar = document.getElementById("btn-sumar");
var restar = document.getElementById("btn-restar");

sumar.addEventListener('click', function () {

    v1 = parseInt(document.getElementById('valor1').value);
    v2 = parseInt(document.getElementById('valor2').value);

    console.log("resultado suma: ", v1 + v2);
    /*alert("resultado suma: " + (v1 + v2));*/
    document.querySelector(".resultado").innerHTML = (v1 + v2);
});

restar.addEventListener('click', function () {

    v1 = parseInt(document.getElementById('valor1').value);
    v2 = parseInt(document.getElementById('valor2').value);

    resultado = v1 - v2;

    if (resultado < 0) {
        resultado = 0;
        /*alert("el resultado es negativo, por lo tanto se muestra resultado cero")*/
        console.log("el resultado es negativo, por lo tanto se muestra resultado cero")
        document.querySelector(".resultado").innerHTML = `el resultado es negativo, por lo tanto se muestra resultado ${resultado}`;

    } else {
        console.log("resultado resta: ", resultado);
        /*alert("resultado resta: "+ (resultado));*/
        document.querySelector(".resultado").innerHTML = resultado;
    }


});