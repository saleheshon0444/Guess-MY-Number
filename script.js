'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
let documentBody = document.querySelector('body');
let documentNumber= document.querySelector('.number');
let documentMessage = document.querySelector('.message');
let documentGuess = document.querySelector('.guess');
function Again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  documentBody.style.backgroundColor = '#222';
  documentNumber.style.width = '15rem';
  documentNumber.textContent = '?';
  documentMessage.textContent = 'Start guessing...';
  documentGuess.value = '';
  document.querySelector('.check').disabled = false;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess)
    document.querySelector('.message').textContent = 'No Number (YFI)';
  else if (guess === secretNumber) {
    documentMessage.textContent = 'You Won (YFAL)';
    documentBody.style.backgroundColor = '#60b347';
    documentNumber.style.width = '30rem';
    documentNumber.textContent = secretNumber;
    document.querySelector('.check').disabled = true;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', Again);
