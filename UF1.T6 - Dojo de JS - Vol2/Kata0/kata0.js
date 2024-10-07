export function string1 (nom, cognom){
    return nom.toUpperCase() + " " + cognom.toLowerCase() 
}

export function string2(paragraf) {
    let paraules = [];
    let paraulaActual = '';

    for (let i = 0; i < paragraf.length; i++) {
        if (paragraf.charAt(i) === ' ') {
            if (paraulaActual.length > 0) {
                paraules.push(paraulaActual);
                paraulaActual = '';
            }
        } else {
            paraulaActual += paragraf.charAt(i);
        }
    }

    if (paraulaActual.length > 0) {
        paraules.push(paraulaActual);
    }

    return paraules;
}

export function string3(frase) {
    if (frase.length >= 6) {
        let cadenaCortada = frase.slice(0, 5);
        console.log(cadenaCortada)
        return cadenaCortada;
    } else {
        return frase;
    }
}
console.log("Function string3 ---")
string3("Holamundo")

//Number

export function number1 (decimal) {
    if (isNaN(decimal)) {
        return console.log("Ingresa un numero como parametro")
    } else {
        return console.log(decimal.toFixed(2))
    }
}

console.log("Function number1 ---")
number1("hola")
number1(15.67877)

export function number2 (cadenaEntero, cadenaDecimal) {
    let entero = Number.parseInt(cadenaEntero);
    let decimal = Number.parseFloat(cadenaDecimal);
    return console.log(entero + " " + decimal)
}
console.log("Function number2 ---")
number2('10', '10.245551')

export function number3 (cadenaNumero) {
    let entero = Number.parseInt(cadenaNumero)
    let resultado = entero * 10;
    return console.log(resultado)
}

console.log("Function number3 ---")
number3('10')

//Boolean

export function boolean1(cadena) {
    if (cadena.length === 0) {
        return true   
    } else {
        return false
    }
}

console.log("Function boolean1 ---")
console.log(boolean1(""))
console.log(boolean1("Holamundo"))

export function boolean2(valor) {
    return Boolean(valor);
}

console.log("Function boolean2 ---")
console.log(boolean2(""))
console.log(boolean2("hola"))
console.log(boolean2(0))
console.log(boolean2(1))

export function boolean3(numero) {
    if (numero >= 0) {
        return true
    } else {
        return false
    }
}
console.log("Function boolean3 ---")
console.log(boolean1(""))

//Date
export function date1() {
    const date = new Date()
    return date;
}

console.log("Function date1 ---")
console.log(date1())

/* export function date2() {
    const date = new Date()
    return date.toLocaleDateString("es-ES")
} */

export function date2(date1, date2) {
    const date1F = new Date(date1)
    const date2F = new Date(date2)
    let diferencia = date1F - date2F
    const day_as_milliseconds = 86400000;
    return diferencia / day_as_milliseconds
    
}
console.log("Function date2 ---")
console.log(date2("2003-06-15", "2002-06-15"));

function date3(date1) {
    const date = new Date(date1);
    const diasSemana = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
   
    const diaIndex = date.getDay(); 
    return diasSemana[diaIndex];
  }

console.log("Function date3 ---")
console.log(date3("2024-09-25"))

//Math
function math1() {
    let randomNum = Math.random() * 100 + 1;

    let numRedondeado = Math.round(randomNum);
    
    return numRedondeado;
  }
  console.log("Function math1 ---")
  console.log(math1());  // Retorna un número aleatori entre 1 i 100, arrodonit
  
function math2(n) {
    return Math.sqrt(n)
}

console.log("Function math2 ---")
  console.log(math2(16));

  function math3(radio){
    let resultado = Math.PI * (radio * radio)
    return resultado
  }
  console.log("Function math3 ---")
  console.log(math3(16));
