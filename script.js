// You'd normally add functionality to handle searches and button clicks. 
// For this example, let's just make the buttons log to the console.
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent + " clicked!");
    });
});
