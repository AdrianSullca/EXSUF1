export function daysBetweenDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const differenceInMilliseconds = Math.abs(d2 - d1);
  
    // Convierto los milisegundos a días (1 día = 24 horas * 60 minutos * 60 segundos * 1000 milisegundos)
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    return Math.round(differenceInMilliseconds / millisecondsPerDay);
  }
  