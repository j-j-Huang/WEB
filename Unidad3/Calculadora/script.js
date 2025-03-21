const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let shouldClearDisplay = false;

// Lista de colores disponibles para el texto
const colores = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "magenta"];

// Función para obtener un color aleatorio
function obtenerColorAleatorio(colores) {
    return colores[Math.floor(Math.random() * colores.length)];
}

// Función para actualizar el display
function updateDisplay(value) {
    display.textContent = value;
}

// Función para manejar el cálculo
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
            }
        default:
            return num2;
    }
}

// Función para cambiar el color del texto del display
function cambiarColorTexto() {
    const colorAleatorio = obtenerColorAleatorio(colores);
    display.style.color = colorAleatorio; 
}

// Evento para los botones
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText.match(/[0-9]/)) {
            if (shouldClearDisplay) {
                updateDisplay("");
                shouldClearDisplay = false;
            }
            if (display.textContent.length >= 17) return;
            updateDisplay(display.textContent + buttonText);
            cambiarColorTexto(); // Cambiar el color del texto al hacer clic en un número
        } else if (buttonText === "." && !display.textContent.includes(".")) {
            updateDisplay(display.textContent + buttonText);
        } else if (buttonText === "C") {
            updateDisplay("0");
            currentInput = "";
            currentOperator = "";
        } else if (buttonText === "←") {
            updateDisplay(display.textContent.slice(0, -1) || "0");
        } else if (buttonText === "=") {
            if (currentOperator && currentInput) {
                const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.textContent));
                updateDisplay(result);
                currentInput = result;
                currentOperator = "";
                shouldClearDisplay = true;
            }
        } else if (buttonText === "+/-") {
            const currentValue = parseFloat(display.textContent);
            if (!isNaN(currentValue)) {
                updateDisplay((currentValue * -1).toString());
            }
        } else {
            currentOperator = buttonText;
            currentInput = display.textContent;
            shouldClearDisplay = true;
        }
    });
});

// Soporte para teclado y cambio de color del texto
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Cambiar el color del texto del display al presionar un número
    if (key.match(/[0-9]/)) {
        cambiarColorTexto(); // Cambiar el color del texto
    }

    // Simular clic en los botones de la calculadora
    if (key.match(/[0-9\.]/)) {
        const button = Array.from(buttons).find((btn) => btn.textContent === key);
        if (button) button.click();
    } else if (key.match(/[\+\-\*\/]/)) {
        const button = Array.from(buttons).find((btn) => btn.textContent === key);
        if (button) button.click();
    } else if (key === "Enter") {
        const button = Array.from(buttons).find((btn) => btn.textContent === "=");
        if (button) button.click();
    } else if (key === "Backspace") {
        const button = Array.from(buttons).find((btn) => btn.textContent === "←");
        if (button) button.click();
    }
});