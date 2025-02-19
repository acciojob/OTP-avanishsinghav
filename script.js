document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            // Allow only single digit input
            event.target.value = event.target.value.replace(/[^0-9]/g, "");

            // Move focus to next input if a number is entered
            if (event.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                if (event.target.value === "" && index > 0) {
                    inputs[index - 1].focus();
                } else {
                    event.target.value = ""; // Clear value on backspace
                }
            }
        });

        // Ensure first input is auto-focused on load
        if (index === 0) {
            input.setAttribute("id", "code-1"); // Set correct ID
            input.focus();
        } else {
            input.setAttribute("id", `code-${index + 1}`);
        }
    });
});
