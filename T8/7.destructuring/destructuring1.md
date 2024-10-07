### Ús de l'Assignació per Desestructuració per Extreure Valors d'Objectes

L'assignació per desestructuració és una sintaxi especial introduïda a ES6, que permet assignar valors directament des d'un objecte de manera més neta.

Considera el següent codi en ES5:

```javascript
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

Aquí, la variable `name` tindrà el valor de la cadena `"John Doe"`, i la variable `age` tindrà el valor del número `34`.

Ara, podem fer servir la sintaxi de desestructuració en ES6 per simplificar aquest codi:

```javascript
const { name, age } = user;
```

Novament, la variable `name` tindrà el valor de `"John Doe"`, i `age` el valor de `34`.

### Exercici:

Substitueix les dues assignacions següents per una assignació equivalent amb desestructuració. Encara ha de fer que les variables `today` i `tomorrow` rebin els valors de `today` i `tomorrow` de l'objecte `HIGH_TEMPERATURES`.

```javascript
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```
