// Cash Book

// Deposit
// Withdraw
// Get transcation history
// Get balance

let balance = 0;
const ledger = []

function deposit(amount) {
  balance += amount;
  const message = `$${amount} was deposited on ${new Date().toDateString()}`
  ledger.push(message)
}

function withdraw(amount) {
  balance -= amount;
  const message = `$${amount} was withdrawn on ${new Date().toDateString()}`
  ledger.push(message)
}

function getHistory() {
for(let i= 0; i < ledger.length; i++) {
   console.log(ledger[i])
  }
}

function getBalance() {
  return balance
}



deposit(300)
deposit(5000)
withdraw(2000)
deposit(672)

console.log(getBalance())
getHistory()