### Ús de l'Assignació per Desestructuració per Assignar Variables d'Arrays

ES6 fa que la desestructuració d'arrays sigui tan fàcil com la desestructuració d'objectes.

Una diferència clau entre l'operador spread (`...`) i la desestructuració d'arrays és que l'operador spread desempaca tot el contingut d'un array en una llista separada per comes. Com a resultat, no pots triar quins elements vols assignar a variables.

La desestructuració d'un array et permet fer exactament això:

```javascript
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

La consola mostrarà els valors de `a` i `b` com 1 i 2.

La variable `a` rep el primer valor de l'array, i `b` rep el segon valor de l'array. També podem accedir al valor de qualsevol índex en un array mitjançant la desestructuració usant comes per arribar a l'índex desitjat:

```javascript
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

La consola mostrarà els valors de `a`, `b`, i `c` com 1, 2, i 5.

### Exercici:

Utilitza l'assignació per desestructuració per intercanviar els valors de `a` i `b`, de manera que `a` rebi el valor emmagatzemat a `b` i `b` rebi el valor emmagatzemat a `a`.

```javascript
let a = 8, b = 6;

// Intercanvia els valors de 'a' i 'b'
```