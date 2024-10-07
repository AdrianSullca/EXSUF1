function minExtraChars(s, dictionary) {
    let extraChars = 0; // Contador para caracteres sobrantes . Inicializado en 0
    let n = s.length; // igualo a la longitud de la cadena ya que seran las veces que el bucle se reptira

    // Un bucle para recorrer cada caracter de la cadena
    for (let i = 0; i < n; i++) {
        let encontrado = false; // Variable para saber si se ha encontrado una subcadena
        
        // Intentamos formar subcadenas a partir del índice i
        for (let j = i; j < n; j++) {
            // Extraemos la subcadena de i a j
            let substring = s.slice(i, j + 1);
            
            // Verificamos si la subcadena esta en el diccionario
            if (dictionary.includes(substring)) {
                encontrado = true; // Se encontro una subcadena valida o que coincide
                i = j; // Actualizamos i para saltar los caracteres de la subcadena que ya se encontro
                break; // Salimos del bucle y emepzamos de nuevo en el primer for
            }
        }

        // Si no se encontro ninguna subcadena valida, contamos el caracter actual como sobrante
        if (!encontrado) {
            extraChars++;
        }
    }

    return extraChars; // Devuelve el número de caracteres sobrantes
}

console.log(minExtraChars("leetscode", ["leet", "code", "leetcode"])); // 1
console.log(minExtraChars("sayhelloworld", ["hello", "world"])); // 3
