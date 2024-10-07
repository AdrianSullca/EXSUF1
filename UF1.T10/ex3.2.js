let entrada = prompt('Introdueix un número entre 1 i 100:');
let parell = parseInt(entrada) % 2 == 0 ? true : false 
if (parell) {
    alert(`El numero es par ${entrada}`);
}
alert(`El numero es inpar ${entrada}`);
