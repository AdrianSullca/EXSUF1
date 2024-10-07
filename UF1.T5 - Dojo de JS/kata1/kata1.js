export function sumPositiveElements(array) {
  let resultado = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      resultado += array[i]
    }
  }
  return resultado
}

let arr = [1, 1, 5, -4, -5, 10, 3, -2]

console.log(sumPositiveElements(arr))
