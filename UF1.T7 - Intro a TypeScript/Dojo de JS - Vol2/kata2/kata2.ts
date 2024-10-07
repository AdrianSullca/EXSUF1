function numeroRandomKata2(max: number): number {
    const randomNum: number = Math.random() * max;
    const numRedondeado: number = Math.floor(randomNum);
    return numRedondeado;
  }
  
  function getUserChoice(userInput: string): string | undefined {
    userInput = userInput.toLowerCase();
    if (userInput === 'piedra' || userInput === 'papel' || userInput === 'tijera') {
      return userInput;
    } else {
      console.log('¡Opción no válida!');
      return undefined;
    }
  }
  
  function getComputerChoice(): string {
    const opciones: string[] = ['piedra', 'papel', 'tijera'];
    const indiceOpciones: number = numeroRandomKata2(opciones.length);
    const computerChoice: string = opciones[indiceOpciones];
    return computerChoice;
  }
  
  function determineWinner(userChoice: string, computerChoice: string): string {
    if (userChoice === computerChoice) {
      return 'Empate';
    }
  
    if (userChoice === 'piedra') {
      if (computerChoice === 'tijera') {
        return '¡Has ganado! Piedra rompe tijera.';
      } else {
        return '¡Has perdido! Papel envuelve piedra.';
      }
    }
  
    if (userChoice === 'papel') {
      if (computerChoice === 'piedra') {
        return '¡Has ganado! Papel envuelve piedra.';
      } else {
        return '¡Has perdido! Tijera corta papel.';
      }
    }
  
    if (userChoice === 'tijera') {
      if (computerChoice === 'papel') {
        return '¡Has ganado! Tijera corta papel.';
      } else {
        return '¡Has perdido! Piedra rompe tijera.';
      }
    }
  
    return 'Resultado no determinado';
  }
  
  function playGame(): void {
    const userInput: string | null = prompt('Escoge piedra, papel o tijera:');
    if (!userInput) return;
  
    const userChoice: string | undefined = getUserChoice(userInput);
    if (!userChoice) return;
  
    const computerChoice: string = getComputerChoice();
    console.log('Tú has escogido: ' + userChoice);
    console.log('El ordenador ha escogido: ' + computerChoice);
  
    const resultado: string = determineWinner(userChoice, computerChoice);
    console.log(resultado);
  }
  
  playGame();
  