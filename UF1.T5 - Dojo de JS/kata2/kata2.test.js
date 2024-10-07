import { repeatString } from './kata2';

describe('kata #2: Repeteix un string', () => {

  test('debería devolver una cadena vacía si el número es 0', () => {
    expect(repeatString('JavaScript', 0)).toBe('');
  });

  test('debería devolver el string original si el número es 1', () => {
    expect(repeatString('university', 1)).toBe('university');
  });

  test('debería devolver el string repetido 3 veces', () => {
    expect(repeatString('hello', 3)).toBe('hellohellohello');
  });

  test('debería devolver el string repetido 10 veces', () => {
    expect(repeatString('?', 10)).toBe('??????????');
  });

});
