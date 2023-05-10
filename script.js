var buttonCount = 0; // Counter to keep track of the button presses

function moveButton() {
  if (buttonCount < 5) {
    var button = document.getElementById("movingButton");
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    // Generate random position within the window dimensions
    var windowWidth = window.innerWidth - buttonWidth;
    var windowHeight = window.innerHeight - buttonHeight;
    var randomLeft = Math.floor(Math.random() * windowWidth);
    var randomTop = Math.floor(Math.random() * windowHeight);

    // Set new position for the button
    button.style.left = randomLeft + "px";
    button.style.top = randomTop + "px";

    buttonCount++;
  } else {
    // Hide the button
    var button = document.getElementById("movingButton");
    button.style.display = "none";

    // Display content on the page
    var gifContainer = document.querySelector(".gif-container");
    gifContainer.style.backgroundImage = "url('assets/dfh1lkr-697d47f2-83ba-4c51-b946-5e3e8a09b2e4.gif')"; // Set the GIF as the background image

    // Show the content container
    var contentContainer = document.querySelector(".content-container");
    contentContainer.style.display = "block";

    // Apply fade-in animation to the content container
    contentContainer.classList.add("fade-in");
  }
}

// Attach click event listener to the button
var button = document.getElementById("movingButton");
button.addEventListener("click", moveButton);
