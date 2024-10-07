### Compara els àmbits de les paraules clau `var` i `let`

Quan declares una variable amb la paraula clau `var`, es declara globalment, o localment si es declara dins d'una funció.

La paraula clau `let` es comporta de manera similar, però amb algunes característiques addicionals. Quan declares una variable amb la paraula clau `let` dins d'un bloc, sentència o expressió, el seu àmbit està limitat a aquell bloc, sentència o expressió.

Per exemple:

```javascript
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Aquí la consola mostrarà els valors `[0, 1, 2]` i `3`.

Amb la paraula clau `var`, `i` es declara globalment. Per tant, quan s'executa `i++`, actualitza la variable global. Aquest codi és similar al següent:

```javascript
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Aquí la consola mostrarà els valors `[0, 1, 2]` i `3`.

Aquest comportament causarà problemes si vols crear una funció i emmagatzemar-la per utilitzar-la més tard dins d'un bucle `for` que utilitzi la variable `i`. Això és perquè la funció emmagatzemada sempre es referirà al valor actualitzat de la variable global `i`.

```javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

Aquí la consola mostrarà el valor `3`.

Com pots veure, `printNumTwo()` imprimeix `3` i no `2`. Això es deu al fet que el valor assignat a `i` s'ha actualitzat i `printNumTwo()` retorna el valor global de `i`, i no el valor que tenia `i` quan la funció es va crear dins del bucle `for`. La paraula clau `let` no segueix aquest comportament:

```javascript
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

Aquí la consola mostrarà el valor `2`, i un error que indica que `i` no està definit.

`i` no està definit perquè no es va declarar a l'àmbit global. Només es declara dins de la sentència del bucle `for`. `printNumTwo()` retorna el valor correcte perquè s'han creat tres variables `i` diferents amb valors únics (0, 1 i 2) dins del bucle `for` gràcies a la paraula clau `let`.

Corregeix el codi perquè la variable `i` declarada dins de la sentència `if` sigui una variable separada de la declarada a la primera línia de la funció. Assegura't de no utilitzar la paraula clau `var` en cap part del teu codi.