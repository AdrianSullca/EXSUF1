function ordenarArray(numsOcupados) {
  return numsOcupados.sort((a, b) => a - b);
}

function obtenerNumSiguiente(numsOcupados) {
  return Math.max(...numsOcupados) + 1;
}

function obtenerNumAnterior(numsOcupados) {
  return Math.min(...numsOcupados) - 1;
}

function compararFecha(fecha) {
  const fechaActual = new Date();
  fechaActual.setHours(0, 0, 0, 0);
  const [dia, mes, año] = fecha.split("/").map(Number);
  const fechaEntrada = new Date(año, mes - 1, dia); // Los meses en JS van de 0 a 11

  if (fechaEntrada < fechaActual) {
    return true
  } else  {
    return false;
  }
}

function registreCursa(edad, fecha, anticipada) {
  anticipada = compararFecha(fecha)
  if (edad > 18) {
    if (anticipada) {
      let numNuevo = obtenerNumSiguiente(numsOcupados);
      numsOcupados.push(numNuevo);
      console.log([numNuevo, "9:30", edad]);
    } else {
      let numNuevo = obtenerNumAnterior(numsOcupados);
      numsOcupados.push(numNuevo);
      console.log([numNuevo, "11:00", edad]);
    }
  } else if (edad < 18) {
    let numNuevo = obtenerNumSiguiente(numsOcupados);
    numsOcupados.push(numNuevo);
    console.log([numNuevo, "12:30", edad]);
  } else {
    console.log("Acércate al punto de información");
  }
  return ordenarArray(numsOcupados);
}

//inicializo el array con algunos datos
let numsOcupados = [999, 1000];

//cambiar fechas al dia actual para probar la entrada no anticipada y el numero dado
numsOcupados = registreCursa(20, "18/9/2024");
numsOcupados = registreCursa(20, "20/9/2024");
numsOcupados = registreCursa(21, "20/9/2024");
numsOcupados = registreCursa(25, "19/9/2024");
numsOcupados = registreCursa(20, "17/9/2024");
numsOcupados = registreCursa(18, "17/9/2024");
numsOcupados = registreCursa(18, "17/9/2024");
numsOcupados = registreCursa(17, "17/9/2024");
numsOcupados = registreCursa(16, "17/9/2024");

console.log("Estado final del array:", numsOcupados);

