function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// En este ejemplo uso recurisividad que es llamar a la misma funcion dentro de la misma.
console.log(factorial(5));
/* 
factorial(5) → 5 * factorial(4)
factorial(4) → 4 * factorial(3)
factorial(3) → 3 * factorial(2)
factorial(2) → 2 * factorial(1)
factorial(1) → 1 * factorial(0)
factorial(0) → 1

factorial(1) = 1×1=1
factorial(2) = 2×1=2
factorial(3) = 3×2=6
factorial(4) = 4×6=24
factorial(5) = 5×24=120
 */