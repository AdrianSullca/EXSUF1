function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum([1,2,3,4,5]))

// Ex8
const numbers1 = [1, 2, 3];
const numbers2 = [3, 4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];

console.log(combinedNumbers);

const result = confirm('Vols continuar?');