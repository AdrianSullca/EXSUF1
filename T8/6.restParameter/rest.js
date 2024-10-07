const sum = (...z) => {
  const args = [...z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(5))
console.log(sum(5, 2, 5))