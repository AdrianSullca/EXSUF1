### Ús de l'Assignació per Desestructuració per Assignar Variables des d'Objectes

La desestructuració et permet assignar un nou nom de variable quan extreus valors d'un objecte. Pots fer-ho posant el nou nom després de dos punts en assignar el valor.

Usant el mateix objecte de l'exemple anterior:

```javascript
const user = { name: 'John Doe', age: 34 };
```

Així és com pots donar nous noms de variables en l'assignació:

```javascript
const { name: userName, age: userAge } = user;
```

Es podria llegir com: "Obtenim el valor de `user.name` i l'assignem a una nova variable anomenada `userName`, i així successivament." El valor de `userName` serà la cadena `"John Doe"`, i el valor de `userAge` serà el número `34`.

### Exercici:

Substitueix les dues assignacions següents per una assignació equivalent amb desestructuració. Encara ha de fer que les variables `highToday` i `highTomorrow` rebin els valors de `today` i `tomorrow` de l'objecte `HIGH_TEMPERATURES`.

```javascript
const HIGH_TEMPERATURES = {
  today: 77,
  tomorrow: 80
};

// Codi original
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow;
```

**Pensa com aplicar la desestructuració per assignar les noves variables!**