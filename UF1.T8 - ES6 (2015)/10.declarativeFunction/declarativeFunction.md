**Escriu Funcions Declaratives Concises amb ES6**

Quan definim funcions dins d'objectes en ES5, hem d'utilitzar la paraula clau `function` com a continuació:

```javascript
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Amb ES6, pots eliminar la paraula clau `function` i els dos punts completament al definir funcions dins d'objectes. Aquí tens un exemple d'aquesta sintaxi:

```javascript
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Refactora la funció `setGear` dins de l'objecte `bicycle` per utilitzar la sintaxi abreujada descrita anteriorment.

```javascript
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```