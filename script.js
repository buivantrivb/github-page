const searchForm = document.querySelector('.search-form');
const searchBar = document.querySelector('.search-bar'); // Cache the search bar element

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = searchBar.value;

    // Redirect using a template literal (cleaner formatting)
    window.location.href = `https://duckduckgo.com/?q=${searchTerm}`; 
});
