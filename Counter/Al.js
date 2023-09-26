const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

// Initialize the counter value
let count = 0;

// Update the counter display
function updateCounter() {
    counterElement.textContent = count;
}

// Event listener for the increment button
incrementButton.addEventListener("click", function() {
    count+=1;
    updateCounter();
});

// Event listener for the decrement button
decrementButton.addEventListener("click", function() {
    // if (count > 0) {
        count-=1;
        // updateCounter();
    // }
});

// Initial update of the counter display
updateCounter();
