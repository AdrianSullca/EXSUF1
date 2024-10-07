function numeroRandomKata1(max: number): number {
  let randomNum: number = Math.random() * max;
  let numRedondeado: number = Math.floor(randomNum);
  return numRedondeado;
}

function numeroRandomEntre1YMax(max: number): number {
  let randomNum: number = Math.random() * max + 1;
  let numRedondeado: number = Math.round(randomNum);
  return numRedondeado;
}

function obtenerOperacion(): string {
  const operaciones: string[] = ["+", "-"];
  let indiceOperacion: number = numeroRandomKata1(operaciones.length);
  const operacion: string = operaciones[indiceOperacion];
  return operacion;
}

function captcha(nIntento: number): boolean {
  let num1: number = numeroRandomEntre1YMax(9);
  let num2: number = numeroRandomEntre1YMax(9);
  let operacion: string = obtenerOperacion();

  alert("La operacion elegida es: " + operacion);

  let resultado: number = parseInt(
    prompt(
      "Resuelve la siguiente operación: " +
        num1 +
        " " +
        operacion +
        " " +
        num2 +
        " Intento: " +
        nIntento
    ) || "0"
  );

  let boolean: boolean;

  switch (operacion) {
    case "+":
      boolean = num1 + num2 === resultado;
      break;
    case "-":
      boolean = num1 - num2 === resultado;
      break;
    default:
      boolean = false;
      break;
  }

  let mensaje: string = boolean ? "Éxito" : "Error";
  alert(mensaje);
  return boolean;
}

function main(): void {
  let n: number = 1;
  while (n <= 3) {
    let booleanCaptcha: boolean = captcha(n);
    if (booleanCaptcha) {
      break;
    }
    n++;
  }

  if (n > 3) {
    alert("Te quedaste sin intentos");
  } else {
    alert("Has resuelto el captcha");
  }
}

main();
