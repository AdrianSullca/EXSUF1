import { removeSpaces } from './kata4'; 

describe('kata #4: Elimina els espais en blanc', () => {

  test('deberia eliminar todos los espacios en "good morning"', () => {
    expect(removeSpaces('good morning')).toBe('goodmorning');
  });

  test('deberia eliminar todos los espacios en " carrot cake "', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });

  test('deberia eliminar todos los espacios en "the abbot gave rice to the fox"', () => {
    expect(removeSpaces('the abbot gave rice to the fox')).toBe('theabbotgavericetothefox');
  });

});
