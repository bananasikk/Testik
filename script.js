let balance = 0;
const balanceDisplay = document.getElementById('balance');
const coin = document.querySelector('.coin');

coin.addEventListener('click', () => {
  balance++;
  balanceDisplay.textContent = balance;
});

// Дополнительный код для обработки логики игры и обновления баланса
