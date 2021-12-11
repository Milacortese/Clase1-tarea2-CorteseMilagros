
console.log("hola");
var nombre = prompt("Hola, por favor ingresa tu nombre");
alert("Hola" + " " + nombre + " " + "bienvenido");
var apellido = prompt("Ingresa tu apellido");
alert(
  "Gracias" + " " + nombre + " " + apellido + ", ahora podes participar"
);

var numero = prompt("Gran sorteo, Elegí un numero entre 10 y 50");
if ((numero >= 10) && (numero <= 50)) {
  alert("Te avisaremos si resultaste ganador, gracias por participar");
} else {
  alert("Ese numero no esta dentro de las posibilidades");
}
