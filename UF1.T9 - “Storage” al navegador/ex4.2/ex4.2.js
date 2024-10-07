let tareas = []

window.onload = function () {
  let tareasLocalStorage = localStorage.getItem('tareas')
  if (tareasLocalStorage) {
    tareas = JSON.parse(tareasLocalStorage)
  }
  mostrarTareas()
}

function añadirTarea() {
  let tarea = document.getElementById('tareaInput').value
  if (tarea) {
    tareas.push(tarea)
    localStorage.setItem('tareas', JSON.stringify(tareas))
    mostrarTareas()
    document.getElementById('tareaInput').value = ''
  }
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1)
  localStorage.setItem('tareas', JSON.stringify(tareas))
  mostrarTareas()
}

function mostrarTareas() {
  let listaTareas = document.getElementById('tareasList')
  listaTareas.innerHTML = ''

  tareas.forEach(function (tarea, indice) {
    let li = document.createElement('li')
    li.textContent = tarea
    let botonBorrar = document.createElement('button')
    botonBorrar.textContent = 'Eliminar'
    botonBorrar.onclick = function () {
      eliminarTarea(indice)
    }
    li.appendChild(botonBorrar)
    listaTareas.appendChild(li)
  })
}
