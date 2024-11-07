// Loop through all drum buttons and add click event listeners
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Get the inner HTML (text) of the clicked button
        let buttonHTML = this.innerHTML;
        // Play sound associated with the button
        makeSound(buttonHTML);
        // Add animation effect to the button
        buttonAnimation(buttonHTML);
    });
}

// Add event listener for keyboard presses
document.addEventListener("keypress", function (event) {
    // Call function to play sound based on key pressed
    makeSound(event.key.toUpperCase());
    // Call function to add animation for the pressed key
    buttonAnimation(event.key.toUpperCase());
});

// Function to play sound based on the key
function makeSound(key) {
    // Switch case to map keys to sound files
    switch (key) {
        case "W":
            var tom1 = new Audio("./assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "A":
            var tom2 = new Audio("./assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio("./assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio("./assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "J":
            var snare = new Audio("./assets/sounds/snare.mp3");
            snare.play();
            break;
        case "K":
            var crash = new Audio("./assets/sounds/crash.mp3");
            crash.play();
            break;
        case "L":
            var kick = new Audio("./assets/sounds/punch.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

// Function to add animation to button when pressed
function buttonAnimation(clickedKey) {
    // Select button based on the key
    var activeKey = document.querySelector("." + clickedKey);

    // Add 'pressed' class for animation effect
    activeKey.classList.add("pressed");

    // Remove the 'pressed' class after a short delay
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}
