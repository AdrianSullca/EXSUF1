import { counter } from './kata5.2';
describe('counter - Funcionalidad Extra', function() {

    test('contadores independientes', function() {
      const count1 = counter();
      const count2 = counter();
  
      expect(count1.increment()).toBe(1); // Primer contador
      expect(count1.increment()).toBe(2);
      expect(count1.reset()).toBe(0);      // Reinicia el primer contador
      expect(count1.increment()).toBe(1);   // Vuelve a empezar
  
      expect(count2.increment()).toBe(1); // Segundo contador (los mismo que el primero)
      expect(count2.increment()).toBe(2);
      expect(count2.reset()).toBe(0);      // Reinicia
      expect(count2.increment()).toBe(1);   // empieza nueamente
    });
  
  });