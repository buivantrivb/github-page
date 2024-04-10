// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessField').value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    setMessage('Please enter a valid number between 1 and 100.', 'red');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    setMessage(`Congratulations! You've guessed the correct number (${randomNumber}) in ${attempts} attempts.`, 'green');
    document.getElementById('guessField').disabled = true;
  } else {
    const message = guess < randomNumber ? 'Too low! Try again.' : 'Too high! Try again.';
    setMessage(message, 'blue');
  }
}

function setMessage(message, color) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.color = color;
}
