import { sumPositiveElements } from './kata1'

describe('kata #1: sumPositiveElements', () => {
  test('debería devolver 0 para un array vacío', () => {
    expect(sumPositiveElements([])).toBe(0)
  })

  test('debería devolver la suma de los números positivos en el array', () => {
    expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15)
  })

  test('debería devolver la suma de los números positivos cuando hay números negativos', () => {
    expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13)
  })

  test('debería devolver 0 cuando todos los elementos son negativos', () => {
    expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9)
  })

  test('debería manejar arrays con ceros y números positivos', () => {
    expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0)
  })
})
