function canviarColor(color) {
  if (color == 'blau') {
    document.body.style.backgroundColor = 'blue'
    localStorage.setItem('colorFons', 'blue')
  }

  if (color == 'verd') {
    document.body.style.backgroundColor = 'green'
    localStorage.setItem('colorFons', 'green')
  }

  if (color == 'groc') {
    document.body.style.backgroundColor = 'yellow'
    localStorage.setItem('colorFons', 'yellow')
  }
}

window.onload = function () {
  let colorGuardat = localStorage.getItem('colorFons')
  if (colorGuardat !== null) {
    document.body.style.backgroundColor = colorGuardat
  }
}
