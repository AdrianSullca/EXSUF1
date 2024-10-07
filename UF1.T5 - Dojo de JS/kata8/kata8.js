export function updateBalance(obj, transactions) {
    let currentBalance = obj; 
    // Sumar todas las transacciones al saldo
    for (let i = 0; i < transactions.length; i++) {
      currentBalance += transactions[i]; 
    }

    return { balance: currentBalance };
  }