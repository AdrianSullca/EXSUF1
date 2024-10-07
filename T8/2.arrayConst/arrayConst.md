La declaració `const` té molts usos en JavaScript modern.

Alguns desenvolupadors prefereixen assignar totes les seves variables utilitzant `const` per defecte, tret que sàpiguen que necessitaran reasignar el valor. Només en aquest cas utilitzen `let`.

Tanmateix, és important entendre que els objectes (incloent-hi arrays i funcions) assignats a una variable utilitzant `const` encara són mutables. Utilitzar la declaració `const` només impedeix la reasignació de l'identificador de la variable.

```javascript
const s = [5, 6, 7];
s = [1, 2, 3]; // Això causarà un error
s[2] = 45;     // Aquesta línia és vàlida
console.log(s); // Mostra [5, 6, 45]
```

La línia `s = [1, 2, 3]` provocarà un error. Si comentes aquesta línia, el `console.log` mostrarà el valor `[5, 6, 45]`.

Com pots veure, pots modificar l'objecte `[5, 6, 7]` en si mateix, i la variable `s` encara apuntarà a l'array alterat `[5, 6, 45]`. Com tots els arrays, els elements de l'array en `s` són mutables, però com que s'ha utilitzat `const`, no pots utilitzar l'identificador de la variable `s` per apuntar a un array diferent utilitzant l'operador d'assignació.

Es declara un array com `const s = [5, 7, 2]`. Modifica l'array perquè sigui `[2, 5, 7]` utilitzant diverses assignacions d'elements.