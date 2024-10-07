import { bobEsponja } from './kata7';
describe('kata #7: BobEsponja - Casos específicos', () => {

  test('debería devolver "Bob" para el número 3', () => {
    expect(bobEsponja(3)).toBe('Bob');
  });

  test('debería devolver "Esponja" para el número 5', () => {
    expect(bobEsponja(5)).toBe('Esponja');
  });

  test('debería devolver "BobEsponja" para el número 15', () => {
    expect(bobEsponja(15)).toBe('BobEsponja');
  });

  test('debería devolver 7 cuando no es divisible por 3 ni por 5', () => {
    expect(bobEsponja(7)).toBe(7);
  });

});
