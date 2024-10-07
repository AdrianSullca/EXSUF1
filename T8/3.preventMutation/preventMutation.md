
### **Evita la Mutació d'Objectes**

Tal com has vist en el repte anterior, declarar una variable amb `const` no protegeix completament les dades de possibles mutacions. Per assegurar-te que les dades no canviïn, JavaScript proporciona la funció `Object.freeze`, que impedeix que les propietats de l'objecte es modifiquin.

Qualsevol intent de canviar l'objecte serà rebutjat, i si el codi s'executa en mode estricte (strict mode), es llençarà un error.

**Exemple:**

```javascript
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};
Object.freeze(obj); // Impedeix la mutació de l'objecte
obj.review = "bad"; // No es permet modificar la propietat existent
obj.newProp = "Test"; // No es permet afegir noves propietats
console.log(obj); // Mostra { name: "FreeCodeCamp", review: "Awesome" }
```

Els intents de canviar `obj.review` o d'afegir `obj.newProp` resultaran en errors perquè l'editor funciona en mode estricte per defecte, i la consola mostrarà el valor `{ name: "FreeCodeCamp", review: "Awesome" }`.
