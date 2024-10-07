"use strict";
function minExtraChars(s, dictionary) {
    let extraChars = 0; // Contador para caracteres sobrantes. Inicializado en 0
    let n = s.length; // Longitud de la cadena
    // Un bucle para recorrer cada caracter de la cadena
    for (let i = 0; i < n; i++) {
        let encontrado = false; // Variable para saber si se ha encontrado una subcadena
        // Intentamos formar subcadenas a partir del índice i
        for (let j = i; j < n; j++) {
            // Extraemos la subcadena de i a j
            let substring = s.slice(i, j + 1);
            // Verificamos si la subcadena está en el diccionario
            if (dictionary.includes(substring)) {
                encontrado = true; // Se encontró una subcadena válida
                i = j; // Actualizamos i para saltar los caracteres de la subcadena que ya se encontró
                break; // Salimos del bucle interno para avanzar en el bucle principal
            }
        }
        // Si no se encontró ninguna subcadena válida, contamos el caracter actual como sobrante
        if (!encontrado) {
            extraChars++;
        }
    }
    return extraChars; // Devuelve el número de caracteres sobrantes
}
