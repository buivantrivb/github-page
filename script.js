function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();
    
    if (isNaN(dob.getTime())) {
      displayResult('Please enter a valid date of birth.', 'red');
      return;
    }
  
    const ageInMilliseconds = today - dob;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    const ageInMonths = Math.floor(ageInYears * 12 + (today.getMonth() - dob.getMonth()));
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  
    const resultMessage = `You are ${ageInYears} years old, ${ageInMonths} months old, and ${ageInDays} days old.`;
    displayResult(resultMessage, 'green');
  }
  
  function displayResult(message, color) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.color = color;
  }
  