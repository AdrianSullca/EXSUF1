import { string3 } from './kata0';

describe('kata #0', () => {

  test('String3: Deberia devolver holam', () => {
    expect(string3('holamundo')).toBe('holamu');
  });
});
