// Select the search form (you'd need to add an ID to your <form> for this to work)
const searchForm = document.getElementById('search-form'); 

// Select buttons
const searchButton = document.querySelector('.buttons button:first-child');
const luckyButton = document.querySelector('.buttons button:last-child');

// Basic fake search functionality
searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission
    const searchQuery = document.getElementById('search-box').value;
    alert("You searched for: " + searchQuery); 
});

// "I'm Feeling Lucky" with a random Wikipedia redirect
luckyButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
});
