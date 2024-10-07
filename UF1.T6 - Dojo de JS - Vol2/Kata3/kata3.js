function main() {
  let nombre = '';
  nombre = prompt('Nombre: ');
  if (nombreOk(nombre)) {
    let evento = prompt('Tipo de evento: ');
    if (eventoOk(evento)) {
      switch (evento) {
        case 'Marato':
          alert('50 dies dentrenament');
          break;
        case 'Mitja Marato':
          alert('30 dies dentrenament');
          break;
        case 'Cursa':
          alert('15 dies dentrenament');
          break;
        case 'Triatló':
          alert('70 dies dentrenament');
          break;

        default:
          break;
      }
    } else {
      alert('Evento no valido');
    }
  } else {
    alert('Atleta desconocido');
  }
}

function nombreOk(nombre) {
  if (nombre.length === 0) {
    return false;
  }
  return true;
}

function eventoOk(evento) {
  let eventos = ['Marato', 'Mitja Marato', 'Cursa', 'Triatló'];
  for (let i = 0; i < eventos.length; i++) {
    if (eventos[i] == evento) {
      return true;
    }
  }
  return false;
}

main();
