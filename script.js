let output = document.getElementById("output");

function appendToOutput(value) {
    output.textContent += value;
}

function calculate() {
    if (output.textContent === "4*6") {
        output.textContent = "24 hunxa hau\uD83D\uDE09";
    } else {
        try {
            const result = eval(output.textContent);
            output.textContent = result;
        } catch (error) {
            output.textContent = "Error vayo tw solti";
        }
    }
}

function deleteLastCharacter() {
    let currentOutput = output.textContent;
    if (currentOutput.length > 0) {
        output.textContent = currentOutput.slice(0, -1); 
    }
}

function clearOutput() {
    output.textContent = ""; // Clear the output text
}
