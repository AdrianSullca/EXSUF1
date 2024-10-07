const tiempoHoyFah = 100;
//convertir de Farenheit a Celsius
function FarenheitCelsius(GradosEnCelsius) {
  let resultado = Math.round(((GradosEnCelsius - 32) * 5) / 9);
  console.log(Math.trunc(resultado));
  console.log("La temperatura es " + resultado + " grados Celsius");
  return resultado;
}

FarenheitCelsius(tiempoHoyFah);

let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre);

alert("Este es un mensaje de alerta.");

