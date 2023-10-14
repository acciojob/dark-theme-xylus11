//your code here

//your code here
// Get references to the elements
const appDiv = document.getElementById('app');
const swapButton = document.getElementById('swap');

// Function to toggle the theme
function swapTheme() {
    if (appDiv.classList.contains('day')) {
        // Switch to night theme
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
    } else {
        // Switch to day theme
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
    }
}

// Add a click event listener to the button
swapButton.addEventListener('click', swapTheme);