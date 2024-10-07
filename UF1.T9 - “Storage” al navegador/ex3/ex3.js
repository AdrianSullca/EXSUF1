function guardarDada(camp) {
    let valor = document.getElementById(camp).value;
    sessionStorage.setItem(camp, valor);
}

window.onload = function() {
    const camps = ['nom', 'cognoms', 'email'];
    camps.forEach(function(camp) {
      let valorGuardat = sessionStorage.getItem(camp);
      if (valorGuardat !== null) {  // Si hi ha valor guardat
        document.getElementById(camp).value = valorGuardat;  // Omplim el camp
      }
    });
}