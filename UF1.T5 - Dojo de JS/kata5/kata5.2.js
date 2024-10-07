export function counter() {
    let n = 0;
  
    return {
      increment: function() {
        n++; // Incrementa el contador
        return n; // Devuelve el valor actualizado del contador
      },
      reset: function() {
        n = 0; // Reinicia el contador a 0
        return n; // Devuelve 0
      }
    };
  }