function canviarMode(mode) {
  if (mode == 'clar') {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
  localStorage.setItem('mode', mode)
}

window.onload = function () {
  //cargar el usuario
  let modePreferencia = localStorage.getItem('mode')
  if (modePreferencia != null) {
    canviarMode(modePreferencia)
  }
}
