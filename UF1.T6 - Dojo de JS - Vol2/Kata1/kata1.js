function numeroRandom(max) {
  let randomNum = Math.random() * max;
  let numRedondeado = Math.floor(randomNum);
  return numRedondeado;
}

function numeroRandomEntre1YMax(max) {
  let randomNum = Math.random() * max + 1;
  let numRedondeado = Math.round(randomNum);
  return numRedondeado;
}

function obtenerOperacion() {
  const operaciones = ['+', '-'];
  let indiceOperacion = numeroRandom(operaciones.length);
  const operacion = operaciones[indiceOperacion];
  return operacion;
}

function captcha(nIntento) {
  let num1 = numeroRandomEntre1YMax(9);
  let num2 = numeroRandomEntre1YMax(9);
  let operacion = obtenerOperacion();
  alert('La operacion elegida es: ' + operacion);
  let resultado = parseInt(
    prompt(
      'Resuelve la siguiente operacion: ' +
        num1 +
        ' ' +
        operacion +
        ' ' +
        num2 +
        ' Intento: ' +
        nIntento
    )
  );
  let boolean;
  switch (operacion) {
    case '+':
      boolean = num1 + num2 === resultado ? true : false;
      break;
    case '-':
      boolean = num1 - num2 === resultado ? true : false;
      break;
    default:
      break;
  }
  let mensaje = boolean ? 'Exito' : 'Error';
  alert(mensaje);
  return boolean;
}

function main() {
  let n = 1;
  while (n <= 3) {
    let booleanCaptcha = captcha(n);
    if (booleanCaptcha) {
      break;
    }
    n++;
  }

  if (n > 3) {
    alert('Te quedaste sin intentos');
  } else {
    alert('Has resuelto el captcha');
  }
}

main();
