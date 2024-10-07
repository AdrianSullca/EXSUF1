### Propietats d'Objecte amb Sintaxi Simplificada (Object Property Shorthand)

ES6 afegeix una sintaxi simplificada per definir literals d'objectes fàcilment.

Considera el següent codi:

```javascript
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

La funció `getMousePosition` és una funció senzilla que retorna un objecte que conté dues propietats. ES6 proporciona una "sintaxi de sucre" per eliminar la redundància d'haver d'escriure `x: x`. Pots simplement escriure `x` una vegada, i es convertirà en `x: x` (o una cosa equivalent) de manera automàtica.

Aquí tens la mateixa funció anterior reescrita utilitzant aquesta nova sintaxi:

```javascript
const getMousePosition = (x, y) => ({ x, y });
```

### Exercici:

Utilitza la sintaxi simplificada de les propietats d'objectes per crear i retornar un objecte amb les propietats `name`, `age` i `gender`.

#### Exemple de codi:

```javascript
const createPerson = (name, age, gender) => {
  // Retorna un objecte utilitzant la sintaxi simplificada
  return { name, age, gender };
};

// Exemple d'ús
console.log(createPerson('John', 30, 'male'));
```

#### Sortida esperada:

```javascript
{
  name: "John",
  age: 30,
  gender: "male"
}
```