//ellos
//guardar el valor del contador en una variable
var contador = 0
//capturar el h1 del contador
var h1 = document.querySelector(".contador")
//mostrar el valor actualizado del contador
function actualizar() {
    h1.innerHTML = contador
}
//declarar la funcion suma
function sumar() {

 if (contador == 30){
    contador = 30
 }
 else {
    contador = contador +1
 }
 actualizar()
}
 
//declarar la funcion resta
function restar() {
    if (contador == 0) {
        contador = 0
    }
    else {
        contador = contador - 1
    }
    actualizar()
}

//declarar la funcion reiniciar
function reiniciar() {
    contador = 0
    actualizar()
} 


//nosotrs
//guardar el valor del contador en una variable
var contador1 = 0
//capturar el h1 del contador
var h11 = document.querySelector(".contador1")
//mostrar el valor actualizado del contador
function actualizar1() {
    h11.innerHTML = contador1
}
//declarar la funcion suma
function sumar1() {

 if (contador1 == 30){
    contador1 = 30
 }
 else {
    contador1 = contador1 +1
 }
 actualizar1()
}
 
//declarar la funcion resta
function restar1() {
    if (contador1 == 0) {
        contador1 = 0
    }
    else {
        contador1 = contador1 - 1
    }
    actualizar1()
}

//declarar la funcion reiniciar
function reiniciar1() {
    contador1 = 0
    actualizar1()
}