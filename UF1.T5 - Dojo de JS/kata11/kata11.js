export function calculateCircleArea(radius) {
    if (!isNaN(radius) && radius >= 0) {
        const pi = Math.PI;
        return pi * (radius * radius);
    } else {
        return 'Ingresa un número válido'; 
    }
}