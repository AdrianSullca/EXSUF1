import {updateBalance} from './kata8'
describe('updateBalance - Actualización de saldo', function() {

    test('Debería devolver { balance: 150 } para el saldo inicial 100 y transacciones [50, -20, 30, -10]', function() {
      expect(updateBalance(100, [50, -20, 30, -10])).toEqual({ balance: 150 });
    });
  
    test('Debería devolver { balance: 140 } para el saldo inicial 200 y transacciones [-50, -30, 20]', function() {
      expect(updateBalance(200, [-50, -30, 20])).toEqual({ balance: 140 });
    });
  
    test('Debería devolver { balance: 450 } para el saldo inicial 500 y transacciones [100, -200, -50, 100]', function() {
      expect(updateBalance(500, [100, -200, -50, 100])).toEqual({ balance: 450 });
    });
  
  });
  