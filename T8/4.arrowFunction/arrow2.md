### **Ús de Funcions Fletxa per Escriure Funcions Anònimes Concises**

En JavaScript, sovint no cal que assignem un nom a les funcions, especialment quan passem una funció com a argument dins d'una altra funció. En lloc d'això, creem funcions inline. No necessitem assignar un nom a aquestes funcions perquè no les tornem a utilitzar en cap altre lloc.

Per aconseguir-ho, habitualment fem servir la següent sintaxi:

```javascript
const myFunc = function() {
  const myVar = "valor";
  return myVar;
}
```

Amb ES6, disposem d'una manera més senzilla d'escriure aquestes funcions anònimes mitjançant la sintaxi de funcions fletxa (arrow functions):

```javascript
const myFunc = () => {
  const myVar = "valor";
  return myVar;
}
```

Quan la funció no té un cos de funció i només té un valor de retorn, la sintaxi de funció fletxa et permet ometre la paraula clau `return`, així com les claus que envolten el codi. Això ajuda a simplificar les funcions petites en sentències d'una sola línia:

```javascript
const myFunc = () => "valor";
```

Aquest codi encara retornarà la cadena `"valor"` de manera predeterminada.

---

### **Repte**

Reescriu la funció assignada a la variable `magic`, que retorna un `new Date()`, per utilitzar la sintaxi de funcions fletxa. Assegura't que no es defineix cap altra cosa que la funció fletxa.

**Codi original:**

```javascript
const magic = function() {
  return new Date();
};
```