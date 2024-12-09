document.addEventListener("DOMContentLoaded", () => {
    const storyDiv = document.getElementById("story");
    const choicesDiv = document.getElementById("choices");
    const inputField = document.getElementById("playerInput");
    const submitButton = document.getElementById("submitInput");

    // Set initial story text
    storyDiv.innerText = "Welcome to the adventure! What will you do?";

    // Add a simple choice as an example
    const choices = ["Explore the forest", "Stay put"];
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", () => {
            storyDiv.innerText = `You chose to: ${choice}`;
        });
        choicesDiv.appendChild(button);
    });

    // Handle text input submission
    submitButton.addEventListener("click", () => {
        const input = inputField.value;
        storyDiv.innerText = `You typed: ${input}`;
        inputField.value = ""; // Clear input
    });
});
