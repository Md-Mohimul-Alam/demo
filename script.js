// When the button is clicked, show a message on the page.
const helloButton = document.getElementById("hello-button");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
  message.textContent = "Hello! Thanks for visiting my website.";
});

// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();