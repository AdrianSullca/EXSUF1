# **Exercicis amb `localStorage` i `sessionStorage`**

### **Exercici 1: Comptador de Visites amb `localStorage`**

**Descripció:**

Crea una pàgina web que:

- Mostri el nombre de vegades que l'usuari ha visitat la pàgina.
- Utilitzi `localStorage` per emmagatzemar el comptador de visites.
- Si l'usuari esborra les dades del navegador, el comptador es reinicia.

**Passos amb pistes:**

1. **Comprovar si existeix un comptador al `localStorage`:**
    - Utilitza `localStorage.getItem('comptador')` per obtenir el valor guardat. Si retorna `null`, vol dir que encara no existeix.
2. **Inicialitzar o incrementar el comptador:**
    - Si `comptador` és `null`, inicialitza'l a `1`.
    - Si no, converteix el valor a número i incrementa'l.
3. **Guardar el nou valor al `localStorage`:**
    - Utilitza `localStorage.setItem('comptador', comptador);` per guardar el valor actualitzat.
4. **Mostrar el comptador a la pàgina:**
    - Podeu utilitzar `document.write()` per mostrar el resultat.
    
    ```jsx
    document.write('Has visitat aquesta pàgina ' + comptador + ' vegades.');
    ```
    

---

### **Exercici 2: Preferències de Color de Fons amb `localStorage`**

**Descripció:**

Crea una pàgina web que:

- Tingui diversos botons per canviar el color de fons de la pàgina.
- Quan l'usuari selecciona un color, el color de fons canvia immediatament.
- Emmagatzemi la preferència de color al `localStorage` per mantenir-la entre sessions.

**Passos:**

1. **Crear botons per seleccionar colors:**
    - En el teu codi HTML, afegeix botons que, quan es facin clic, cridin a una funció per canviar el color.
    
    ```html
    <button onclick="canviarColor('blau')">Blau</button>
    <button onclick="canviarColor('verd')">Verd</button>
    <button onclick="canviarColor('groc')">Groc</button>
    ```
    
2. **Definir la funció `canviarColor(color)`:**
    - Aquesta funció canviarà el color de fons i guardarà la preferència.
3. **Aplicar el color guardat en carregar la pàgina:**
    - Quan la pàgina es carrega, comprova si hi ha un color guardat i aplica'l.
    
    ```jsx
    window.onload = function() {
      let colorGuardat = localStorage.getItem('colorFons');
      if (colorGuardat !== null) {
        document.body.style.backgroundColor = colorGuardat;
      }
    };
    
    ```
    
4. **Pistes sobre el DOM:**
    - `document.body.style.backgroundColor` modifica el color de fons del cos de la pàgina.
    - L'atribut `onclick` als botons fa que es cridi a la funció `canviarColor` quan es fa clic.

---

### **Exercici 3: Formulari amb Dades Temporals amb `sessionStorage`**

**Descripció:**

Crea un formulari que:

- Tingui camps per al nom, cognoms i email.
- Emmagatzemi les dades a `sessionStorage` cada vegada que l'usuari escriu en un camp.
- Mantingui les dades al formulari si l'usuari refresca la pàgina durant la sessió.

**Passos amb pistes:**

1. **Crear el formulari en HTML:**
    
    ```html
    <form>
      Nom: <input type="text" id="nom" oninput="guardarDada('nom')"><br>
      Cognoms: <input type="text" id="cognoms" oninput="guardarDada('cognoms')"><br>
      Email: <input type="email" id="email" oninput="guardarDada('email')"><br>
    </form>
    ```
    
2. **Definir la funció `guardarDada(camp)`:**
    - Aquesta funció guardarà el valor del camp a `sessionStorage`.
    
    ```jsx
    function guardarDada(camp) {
      let valor = document.getElementById(camp).value;
      // El teu codi
    }
    ```
    
3. **Recuperar les dades en carregar la pàgina:**
    - Quan la pàgina es carrega, omple els camps amb les dades de `sessionStorage`.
    
    ```jsx
    window.onload = function() {
     // El teu codi
    };
    
    ```
    
4. **Pistes sobre el DOM:**
    - `document.getElementById('id')` accedeix a un element per la seva identificació.
    - L'esdeveniment `oninput` es dispara cada vegada que l'usuari escriu en el camp.

---

### **Exercici 4: Llista de Tasques Senzilla amb `localStorage`**

**Descripció:**

Crea una aplicació de llista de tasques que:

- Permeti afegir noves tasques (s’han de guardar en format JSON! Investiga!!!)
- Mostri la llista de tasques a la pàgina.
- Emmagatzemi les tasques a `localStorage`.
- Permeti esborrar tasques.

**Passos amb pistes:**

1. **Crear l'entrada i el botó per afegir tasques:**
    
    ```html
    <input type="text" id="tascaInput">
    <button onclick="afegirTasca()">Afegir Tasca</button>
    ```
    
2. **Crear un element per mostrar la llista de tasques:**
    
    ```html
    <ul id="llistaTasques"></ul>
    ```
    
3. **Definir l'array de tasques i carregar-les de `localStorage`:**
    
    ```jsx
    let tasques = [];
    
    window.onload = function() {
    // El teu codi
    };
    ```
    
4. **Funció per afegir una tasca:**
    
    ```jsx
    function afegirTasca() {
      let tasca = document.getElementById('tascaInput').value;
      if (tasca) {
        // El teu codi
      }
    }
    ```
    
5. **Funció per mostrar les tasques:**
    
    ```jsx
    function mostrarTasques() {
      let llista = document.getElementById('llistaTasques');
      llista.innerHTML = '';
      // El teu codi --> Introdueix de manera recursiva cada nou <li> amb les dades corresponents.
    }
    
    ```
    
6. **Funció per esborrar una tasca:**
    
    ```jsx
    function esborrarTasca(index) {
      // El teu codi
    }
    
    ```
    
7. **Pistes sobre el DOM:**
    - `element.innerHTML` permet modificar el contingut HTML d'un element.
    - Els botons d'esborrar criden a `esborrarTasca(index)` passant l'índex de la tasca a eliminar.

---

### **Exercici 5: Preferències d'Usuari amb `localStorage` i `sessionStorage`**

**Descripció:**

Crea una pàgina que:

- Permeti seleccionar entre mode clar i mode fosc.
- Guardi la preferència al `localStorage`.
- Demani el nom de l'usuari i el mostri durant la sessió.

**Passos amb pistes:**

1. **Crear botons per canviar de mode:**
    
    ```html
    <button onclick="canviarMode('clar')">Mode Clar</button>
    <button onclick="canviarMode('fosc')">Mode Fosc</button>
    
    ```
    
2. **Funció per canviar el mode i guardar la preferència:**
    
    ```jsx
    function canviarMode(mode) {
      if (mode === 'clar') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
    	// El teu codi 
    }
    
    ```
    
3. **Aplicar el mode guardat en carregar la pàgina:**
    
    ```jsx
    window.onload = function() {
    // El teu codi --> Ha de saber quin és l'usuari i en funció de les seves preferències, carregar el que toca. 
    };
    
    ```
    
4. **Afegir un element per mostrar el nom de l'usuari:**
    
    ```html
    <h1 id="benvinguda"></h1>
    
    ```
    
5. **Pistes sobre el DOM:**
    - `element.style` permet modificar els estils d'un element.
    - `element.innerText` mostra text dins d'un element HTML.

---

### **Consells per als teus alumnes**

- **Practicar amb codi senzill:** Comenceu amb petits exemples per familiaritzar-vos amb com funciona el DOM i l'emmagatzematge web.
- **Utilitzar la consola del navegador:** Podeu provar codi directament a la consola per veure com funciona.
- **Consultar recursos:** Pàgines com MDN Web Docs tenen molta informació i exemples sobre JavaScript, el DOM i l'emmagatzematge web.