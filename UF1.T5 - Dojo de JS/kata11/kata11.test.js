import { calculateCircleArea } from './kata11';
describe('calculateCircleArea - Casos específicos', () => {

  test('debería devolver 78.53981633974483 para un radio de 5', () => {
    expect(calculateCircleArea(5)).toBeCloseTo(78.53981633974483);
  });

  test('debería devolver 314.1592653589793 para un radio de 10', () => {
    expect(calculateCircleArea(10)).toBeCloseTo(314.1592653589793);
  });

  test('debería devolver 0 para un radio de 0', () => {
    expect(calculateCircleArea(0)).toBe(0);
  });

});