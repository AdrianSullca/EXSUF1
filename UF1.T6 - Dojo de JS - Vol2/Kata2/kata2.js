function numeroRandom(max) {
  let randomNum = Math.random() * max;
  let numRedondeado = Math.floor(randomNum);
  return numRedondeado;
}

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'piedra' ||
    userInput === 'papel' ||
    userInput === 'tijera'
  ) {
    return userInput;
  } else {
    console.log('Opcion no valida!');
  }
}

function getComputerChoice() {
  const opciones = ['piedra', 'papel', 'tijera'];
  let indiceOpciones = numeroRandom(opciones.length);
  const computerChoice = opciones[indiceOpciones];
  return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Empate';
  }

  if (userChoice === 'piedra') {
    if (computerChoice === 'tijera') {
      return 'Has ganado! piedra rompe tijera.';
    } else {
      return 'Has perdido! papel envuelve piedra.';
    }
  }

  if (userChoice === 'papel') {
    if (computerChoice === 'piedra') {
      return 'Has ganado! paper envuelve pedra.';
    } else {
      return 'Has perdido! tijera corta papel.';
    }
  }

  if (userChoice === 'tijera') {
    if (computerChoice === 'papel') {
      return 'Has ganado! tijera corta papel.';
    } else {
      return 'Has perdido! piedra rompe tijera.';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice(prompt('Escoge piedra, papel o tijera:'));
  if (!userChoice) return;

  const computerChoice = getComputerChoice();
  console.log('Tu has escogido: ' + userChoice);
  console.log('El ordenador ha escogido: ' + computerChoice);

  const resultado = determineWinner(userChoice, computerChoice);
  console.log(resultado);
}

playGame();
