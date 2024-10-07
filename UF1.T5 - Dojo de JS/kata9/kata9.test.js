import { calculator } from './kata9'; 

describe('kata calculator - Casos específicos', () => {

  test('debería devolver 5 para calculator(2, "+", 3)', () => {
    expect(calculator(2, '+', 3)).toBe(5);
  });

  test('debería devolver 3 para calculator(5, "-", 2)', () => {
    expect(calculator(5, '-', 2)).toBe(3);
  });

  test('debería devolver 12 para calculator(3, "*", 4)', () => {
    expect(calculator(3, '*', 4)).toBe(12);
  });

  test('debería devolver 5 para calculator(10, "/", 2)', () => {
    expect(calculator(10, '/', 2)).toBe(5);
  });

});
