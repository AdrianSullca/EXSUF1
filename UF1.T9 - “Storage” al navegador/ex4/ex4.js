let tasques = []

window.onload = function () {
  let tasquesLocalStorage = localStorage.getItem('tasques')
  if (tasquesLocalStorage) {
    tasques = JSON.parse(tasquesLocalStorage) //convertir de json a array
  }
  mostrarTasques()
}

function afegirTasca() {
  let tasca = document.getElementById('tascaInput').value
  if (tasca) {
    tasques.push(tasca)
    localStorage.setItem('tasques', JSON.stringify(tasques)) //convertir de array a json
    mostrarTasques()
    document.getElementById('tascaInput').value = ''
  }
}

function esborrarTasca(index) {
  tasques.splice(index, 1)
  localStorage.setItem('tasques', JSON.stringify(tasques))
  mostrarTasques() // Actualizar la lista de nuevo poruqe hay una tarea menos
}

function mostrarTasques() {
  let lista = document.getElementById('llistaTasques')
  //con esto limpio la lista actual
  // para que al añadir solo se añado un elemento
  // y no se duplique todos los elementos ya creados
  lista.innerHTML = ''
  tasques.forEach(function (tasca, index) {
    // Crea  <li> para cada tarea
    let li = document.createElement('li')
    li.textContent = tasca

    // Crear un boton de eliminar para eñemento li
    let botonEliminar = document.createElement('button')
    botonEliminar.textContent = 'Eliminar'
    botonEliminar.onclick = function () {
      esborrarTasca(index) // Passar l'índex de la tasca a esborrar
    }

    li.appendChild(botonEliminar) // Añadir el boton al elemento <li>
    lista.appendChild(li) // Añadir el elemento <li> a la lista
  })
}
