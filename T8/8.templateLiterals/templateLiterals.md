### Crea Cadenes Usant Literals de Plantilla

Una nova característica d'ES6 és el literal de plantilla. Aquest és un tipus especial de cadena que fa que la creació de cadenes complexes sigui més fàcil.

Els literals de plantilla permeten crear cadenes multi-línia i utilitzar la interpolació de variables per crear cadenes.

Considera el següent codi:

```javascript
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

La consola mostrarà les cadenes:

```
Hello, my name is Zodiac Hasbro!
I am 56 years old.
```

Algunes coses han canviat aquí. Primerament, l'exemple utilitza cometes inverses (``) en lloc de cometes simples (' o ") per envoltar la cadena. Segon, nota que la cadena és multi-línia, tant en el codi com en la sortida. Això estalvia haver d'inserir `\n` dins de les cadenes. La sintaxi `${variable}` s'utilitza com a marcador de posició. Bàsicament, ja no caldrà utilitzar la concatenació amb l'operador `+`. Per afegir variables a les cadenes, només has d'introduir la variable en una cadena de plantilla i envoltar-la amb `${}`. De manera similar, pots incloure altres expressions dins del literal de plantilla, com per exemple `${a + b}`.

Aquest nou mètode de crear cadenes et dona més flexibilitat per crear cadenes robustes.

### Exercici:

Utilitza la sintaxi del literal de plantilla amb cometes inverses per crear un array d'elements de llista (`<li>`) de text. El text de cada element de llista ha de ser un dels elements de l'array de la propietat `failure` de l'objecte `result`, i ha de tenir un atribut `class` amb el valor `text-warning`. La funció `makeList` ha de retornar l'array d'elements de llista.

Utilitza un mètode iterador (qualsevol tipus de bucle) per obtenir el resultat desitjat.

```javascript
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  // Utilitza un mètode iterador per crear els elements <li> amb la classe text-warning
  const listItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  return listItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
```

### Sortida Esperada:

```javascript
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```