### Ús de l'Assignació per Desestructuració per Assignar Variables des d'Objectes Aniuats

Pots utilitzar els mateixos principis de les lliçons anteriors per desestructurar valors d'objectes aniuats.

Fent servir un objecte similar als exemples anteriors:

```javascript
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Així és com pots extreure els valors de les propietats de l'objecte i assignar-los a variables amb el mateix nom:

```javascript
const { johnDoe: { age, email }} = user;
```

I així és com pots assignar els valors de les propietats de l'objecte a variables amb noms diferents:

```javascript
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

### Exercici:

Substitueix les dues assignacions següents per una assignació equivalent amb desestructuració. Encara ha de fer que les variables `lowToday` i `highToday` rebin els valors de `today.low` i `today.high` de l'objecte `LOCAL_FORECAST`.

```javascript
const LOCAL_FORECAST = {
  today: { low: 68, high: 77 }
};

// Codi original
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
```

**Pensa com aplicar la desestructuració per extreure els valors d'objectes aniuats!**