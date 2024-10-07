function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function encontrarSumaPrimos(num) {
  if (!esPrimo(num)) {
    console.log(num + " no es un número primo.");
    return;
  }

  console.log(num + " es un número primo.");

  for (let i = 2; i < num; i++) {
    if (esPrimo(i)) {
      let j = num - i;
      if (esPrimo(j)) {
        console.log(`Los números primos que suman ${num} son: ${i} y ${j}`);
        return;
      }
    }
  }

  console.log(`No se pueden encontrar dos números primos que sumen ${num}.`);
}

const num = 10;
encontrarSumaPrimos(num);

