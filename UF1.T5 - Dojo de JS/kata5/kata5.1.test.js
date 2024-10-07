import { counter } from './kata5.1';
describe('counter - Casos específicos', function() {

    test('debería devolver 1 en la primera llamada', function() {
      const count = counter();
      expect(count()).toBe(1);
    });
  
    test('debería devolver 2 en la segunda llamada', function() {
      const count = counter();
      count(); // Llama al contador para que n sea 1
      expect(count()).toBe(2); // La segunda llamada debería devolver 2
    });
  
    test('debería devolver 3 en la tercera llamada', function() {
      const count = counter();
      count(); // Llama al contador para que n sea 1
      count(); // Llama de nuevo para que n sea 2
      expect(count()).toBe(3); // La tercera llamada debería devolver 3
    });
  
  });
  