export function bobEsponja(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "BobEsponja"; 
    } else if (n % 5 === 0) {
        return "Esponja"; 
    } else if (n % 3 === 0) {
        return "Bob"; 
    } else {
        return n;
    }
}