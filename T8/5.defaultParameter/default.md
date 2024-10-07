### **Establir Paràmetres Per Defecte per a les Funcions**

Per tal d'ajudar-nos a crear funcions més flexibles, **ES6** introdueix els paràmetres per defecte per a les funcions.

Mira aquest codi:

```javascript
const greeting = (name = "Anonymous") => "Hola " + name;

console.log(greeting("John"));
console.log(greeting());
```

La consola mostrarà les cadenes `Hola John` i `Hola Anonymous`.

El paràmetre per defecte s'activa quan l'argument no està especificat (és **undefined**). Com pots veure a l'exemple anterior, el paràmetre **name** rebrà el seu valor per defecte **Anonymous** quan no proporciones un valor per al paràmetre. Pots afegir valors per defecte per a tants paràmetres com vulguis.

---

### **Repte**

Modifica la funció `increment` afegint paràmetres per defecte de manera que afegeixi 1 a **number** si no es proporciona cap valor per a **value**.

**Codi original:**

```javascript
const increment = (number, value) => number + value;
```
