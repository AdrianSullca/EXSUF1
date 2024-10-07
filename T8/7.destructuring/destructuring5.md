### Desestructuració amb elements rest

En algunes situacions que impliquen la desestructuració d'arrays, potser voldrem agrupar la resta dels elements en un array separat.

El resultat és similar a l'ús de `Array.prototype.slice()`, com es mostra a continuació:

```javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // Mostra 1, 2
console.log(arr);  // Mostra [3, 4, 5, 7]
```

Les variables `a` i `b` agafen el primer i segon valor de l'array. Després d'això, gràcies a la sintaxi rest (`...`), `arr` obté la resta dels valors en forma d'array. L'element rest només funciona correctament com a última variable de la llista. És a dir, no pots utilitzar la sintaxi rest per capturar una subarray que ometi l'últim element de l'array original.

### Exercici:

Utilitza una assignació per desestructuració amb la sintaxi rest per emular el comportament de `Array.prototype.slice()`. La funció `removeFirstTwo()` ha de retornar una subarray de la llista original d'arrays, amb els dos primers elements omesos.

```javascript
function removeFirstTwo(list) {
  // Implementa aquí la desestructuració
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(removeFirstTwo(arr));  // Mostra [3, 4, 5, 6]
```