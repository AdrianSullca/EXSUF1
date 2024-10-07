import { removeFirstAndLast } from './kata3';

describe('kata #3: Elimina el primer i l’últim caràcter', () => {

  test('debería devolver "JavaScript"', () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });

  test('debería devolver "Alexandria"', () => {
    expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
  });

  test('debería devolver "hydrogen"', () => {
    expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
  });

  test('debería devolver "ok" si la cadena tiene exactamente 2 caracteres', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });

});
