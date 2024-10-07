"use strict";
function numeroRandomKata2(max) {
    const randomNum = Math.random() * max;
    const numRedondeado = Math.floor(randomNum);
    return numRedondeado;
}
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'piedra' || userInput === 'papel' || userInput === 'tijera') {
        return userInput;
    }
    else {
        console.log('¡Opción no válida!');
        return undefined;
    }
}
function getComputerChoice() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indiceOpciones = numeroRandomKata2(opciones.length);
    const computerChoice = opciones[indiceOpciones];
    return computerChoice;
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empate';
    }
    if (userChoice === 'piedra') {
        if (computerChoice === 'tijera') {
            return '¡Has ganado! Piedra rompe tijera.';
        }
        else {
            return '¡Has perdido! Papel envuelve piedra.';
        }
    }
    if (userChoice === 'papel') {
        if (computerChoice === 'piedra') {
            return '¡Has ganado! Papel envuelve piedra.';
        }
        else {
            return '¡Has perdido! Tijera corta papel.';
        }
    }
    if (userChoice === 'tijera') {
        if (computerChoice === 'papel') {
            return '¡Has ganado! Tijera corta papel.';
        }
        else {
            return '¡Has perdido! Piedra rompe tijera.';
        }
    }
    return 'Resultado no determinado';
}
function playGame() {
    const userInput = prompt('Escoge piedra, papel o tijera:');
    if (!userInput)
        return;
    const userChoice = getUserChoice(userInput);
    if (!userChoice)
        return;
    const computerChoice = getComputerChoice();
    console.log('Tú has escogido: ' + userChoice);
    console.log('El ordenador ha escogido: ' + computerChoice);
    const resultado = determineWinner(userChoice, computerChoice);
    console.log(resultado);
}
playGame();
