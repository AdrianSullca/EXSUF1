import { daysBetweenDates } from './kata12';

describe('kata #12: Manipulació de Dates amb Objecte Date', () => {

  test('debería devolver 7 días entre el 2024-09-13 y el 2024-09-20', () => {
    expect(daysBetweenDates('2024-09-13', '2024-09-20')).toBe(7);
  });

  test('debería devolver 7 días entre el 2023-12-25 y el 2024-01-01', () => {
    expect(daysBetweenDates('2023-12-25', '2024-01-01')).toBe(7);
  });

  test('debería devolver 0 días entre el 2024-01-01 y el 2024-01-01', () => {
    expect(daysBetweenDates('2024-01-01', '2024-01-01')).toBe(0);
  });

});
