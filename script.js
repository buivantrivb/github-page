function calculateAge() {
    const birthDay = document.getElementById('day').value;
    const birthMonth = document.getElementById('month').value;
    const birthYear = document.getElementById('year').value;
  
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Months are 0-indexed
  
    let age = today.getFullYear() - birthYear;
    let monthDiff = today.getMonth() - birthMonth;
    let dayDiff = today.getDate() - birthDay;
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    if (dayDiff < 0) {
      // Get days in previous month
      const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
      dayDiff += daysInPreviousMonth;
      monthDiff--; 
    }
  
    const result = document.getElementById('result');
    result.innerHTML = `You are ${age} years, ${monthDiff} months, and ${dayDiff} days old.`;
  }
  