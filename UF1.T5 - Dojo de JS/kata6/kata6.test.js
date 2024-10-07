import { fibonacci } from './kata6'; // Ajusta la ruta según tu proyecto

describe('kata #6: Fibonacci', () => {

  test('debería devolver 0 para fibonacci(0)', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('debería devolver 1 para fibonacci(1)', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('debería devolver 1 para fibonacci(2)', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('debería devolver 2 para fibonacci(3)', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('debería devolver 3 para fibonacci(4)', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('debería devolver 5 para fibonacci(5)', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('debería devolver 8 para fibonacci(6)', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('debería devolver 13 para fibonacci(7)', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('debería devolver 21 para fibonacci(8)', () => {
    expect(fibonacci(8)).toBe(21);
  });

  test('debería devolver 34 para fibonacci(9)', () => {
    expect(fibonacci(9)).toBe(34);
  });

  test('debería devolver 55 para fibonacci(10)', () => {
    expect(fibonacci(10)).toBe(55);
  });

});
