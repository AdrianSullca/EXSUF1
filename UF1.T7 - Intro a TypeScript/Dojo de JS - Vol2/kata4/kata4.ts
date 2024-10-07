function kata4(): void {
    let input: string | null = prompt('Introduce una palabra: ');
    if (!input) return;
  
    const vocals: string[] = ['a', 'e', 'i', 'o', 'u'];
    let resultadoArray: string[] = [];
  
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < vocals.length; j++) {
        if (input[i] === vocals[j]) {
          if (vocals[j] === 'e' || vocals[j] === 'u') {
            resultadoArray.push(vocals[j]);
          }
          resultadoArray.push(vocals[j]);
        }
      }
    }
  
    let resultString: string = resultadoArray.join('').toUpperCase();
    alert(resultString);
  }
  