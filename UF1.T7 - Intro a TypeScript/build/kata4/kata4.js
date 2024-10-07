"use strict";
function kata4() {
    let input = prompt('Introduce una palabra: ');
    if (!input)
        return;
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let resultadoArray = [];
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
    let resultString = resultadoArray.join('').toUpperCase();
    alert(resultString);
}
