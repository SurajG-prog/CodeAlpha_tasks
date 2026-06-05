let display = document.getElementById("display");

// Add value
function appendValue(value) {
    display.value += value;
}

// Clear screen
function clearDisplay() {
    display.value = "";
}

// Backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } 
    else if (key === "Enter") {
        calculate();
    } 
    else if (key === "Backspace") {
        backspace();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});
