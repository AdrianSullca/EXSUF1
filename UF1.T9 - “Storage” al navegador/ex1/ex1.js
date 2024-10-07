let comptador = localStorage.getItem('comptador')

if ( comptador == null) {
    comptador = 1;
} else {
    comptador ++
}

console.log(comptador)
localStorage.setItem('comptador', comptador)

document.write('Has visitat aquesta pàgina ' + comptador + ' vegades.');