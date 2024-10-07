function removeFirstTwo(list) {
    const [a, b, ...rest] = list;
    return rest;
  }
  
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(removeFirstTwo(arr));  // Mostra [3, 4, 5, 6]
  