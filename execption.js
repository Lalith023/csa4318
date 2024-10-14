// script.js

function divideNumbers() {
    try {
        // Code that may throw an exception
        var num1 = parseInt(prompt("Enter the first number:"));
        var num2 = parseInt(prompt("Enter the second number:"));
        var result = num1 / num2;
        document.getElementById("result").innerHTML = "Result: " + result;
    } catch (error) {
        // Handle the exception
        if (error instanceof TypeError) {
            document.getElementById("result").innerHTML = "Error: Invalid input type.";
        } else if (error instanceof RangeError) {
            document.getElementById("result").innerHTML = "Error: Invalid range.";
        } else if (error instanceof SyntaxError) {
            document.getElementById("result").innerHTML = "Error: Invalid syntax.";
        } else {
            document.getElementById("result").innerHTML = "Error: An unknown error occurred.";
        }
    } finally {
        // Code that runs regardless of whether an exception was thrown
        console.log("Division operation completed.");
    }
}