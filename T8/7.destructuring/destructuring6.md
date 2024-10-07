### Desestructuració per passar un objecte com a paràmetres d'una funció

En alguns casos, pots desestructurar l'objecte directament en els paràmetres d'una funció.

Considera el següent codi:

```javascript
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}
```

Això desestructura efectivament l'objecte enviat a la funció. També es pot fer directament en el paràmetre:

```javascript
const profileUpdate = ({ name, age, nationality, location }) => {
  // Treballar amb les dades desestructurades
}
```

Quan `profileData` es passa a la funció anterior, els valors es desestructuren del paràmetre per ser utilitzats dins la funció.

### Exercici:

Utilitza l'assignació per desestructuració dins dels paràmetres de la funció `half` per enviar només `max` i `min` dins la funció.

```javascript
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0; 
```