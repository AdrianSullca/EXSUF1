const respuestas = ["hola", "adios", "manzana", "movil"];

let nombre = prompt("Dime tu nombre:");
let pregunta = prompt("Haz una pregunta:");

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let numRandom = getRandomIntInclusive(0, respuestas.length - 1);

let respuesta = alert(respuestas[numRandom]);
alert(
  "Tu nombre: " +
    nombre +
    "\n" +
    "La pregunta: " +
    pregunta +
    "\n" +
    "La respuesta: " +
    respuesta
);

