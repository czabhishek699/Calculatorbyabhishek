let output = document.getElementById("output");

function appendToOutput(value) {
    output.textContent += value;
}

function calculate() {
    if (output.textContent === "1+1") {
        output.textContent = "Happy Birthday Pralika❤️";
    } else {
        
        try {
            const result = eval(output.textContent);
            output.textContent = result;
        } catch (error) {
            output.textContent = "Error";
        }
    }
}function deleteLastCharacter() {
    let currentOutput = output.textContent;
    if (currentOutput.length > 0) {
        output.textContent = currentOutput.slice(0, -1); 
    }
}
