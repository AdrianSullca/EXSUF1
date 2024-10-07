"use strict";
function mainKata3() {
    let nombre = prompt('Nombre: ');
    if (!nombre)
        return;
    if (nombreOk(nombre)) {
        let evento = prompt('Tipo de evento: ');
        if (!evento)
            return;
        if (eventoOk(evento)) {
            switch (evento) {
                case 'Marato':
                    alert('50 dies d\'entrenament');
                    break;
                case 'Mitja Marato':
                    alert('30 dies d\'entrenament');
                    break;
                case 'Cursa':
                    alert('15 dies d\'entrenament');
                    break;
                case 'Triatló':
                    alert('70 dies d\'entrenament');
                    break;
                default:
                    alert('Evento no reconocido');
                    break;
            }
        }
        else {
            alert('Evento no válido');
        }
    }
    else {
        alert('Atleta desconocido');
    }
}
function nombreOk(nombre) {
    return nombre.length > 0;
}
function eventoOk(evento) {
    const eventos = ['Marato', 'Mitja Marato', 'Cursa', 'Triatló'];
    return eventos.includes(evento);
}
mainKata3();
