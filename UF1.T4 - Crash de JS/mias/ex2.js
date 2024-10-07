function calcularEdadPerro(edadHumano) {
  const primerosAñosPerro = 10.5;
  const siguientesAñosPerro = 4;
  let resultadoFinal = 0;
  if (edadHumano <= 2) {
    resultadoFinal = primerosAñosPerro * edadHumano;
  } else {
    let edadRestante = edadHumano - 2;
    let resultado1 = 2 * primerosAñosPerro;
    let resultado2 = edadRestante * siguientesAñosPerro;
    resultadoFinal = resultado1 + resultado2;
  }
  console.log("La edad del perro son " + resultadoFinal + " años humanos");
}

calcularEdadPerro(0);