export function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      if (num2 != 0) {
        return num1 / num2;
      }
      return "No se puede dividir por 0";
    case '*':
      return num1 * num2;
    default:
      return "Operador no válido";
  }
}
