Aquí tens la traducció i l'enunciat del repte:

---

### **Utilitza el Paràmetre Rest amb Paràmetres de Funció**

Per tal d'ajudar-nos a crear funcions més flexibles, **ES6** introdueix el paràmetre **rest** per als paràmetres de funció. Amb el paràmetre **rest**, pots crear funcions que acceptin un nombre variable d'arguments. Aquests arguments s'emmagatzemen en un array que es pot accedir posteriorment des de dins de la funció.

Mira aquest codi:

```javascript
function howMany(...args) {
  return "Has passat " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));
```

La consola mostrarà les cadenes `Has passat 3 arguments.` i `Has passat 4 arguments.`.

El paràmetre **rest** elimina la necessitat d'utilitzar l'objecte **arguments** i ens permet fer servir mètodes d'arrays sobre l'array de paràmetres passats a la funció **howMany**.

---

### **Repte**

Modifica la funció **sum** utilitzant el paràmetre **rest** de manera que la funció **sum** sigui capaç d'acceptar qualsevol nombre d'arguments i retornar la seva suma.

**Codi original:**

```javascript
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```