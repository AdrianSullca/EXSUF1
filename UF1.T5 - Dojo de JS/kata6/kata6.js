export function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  let a = 0,
    b = 1,
    siguiente
  for (let i = 2; i <= n; i++) {
    siguiente = a + b
    a = b
    b = siguiente
  }
  return b
}