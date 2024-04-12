const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const searchTerm = document.querySelector('.search-bar').value;
    
    // Redirect to a search engine (e.g., DuckDuckGo)
    window.location.href = 'https://duckduckgo.com/?q=' + searchTerm; 
});
