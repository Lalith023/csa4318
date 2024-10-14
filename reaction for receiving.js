// Get the HTML elements
var elem = document.getElementById("myElement");
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var resultElem = document.getElementById("result");
var calculateButton = document.getElementById("calculateButton");

// Add event listeners to the elements
elem.addEventListener("click", function() {
    // Change the style of the element
    elem.style.color = "red";
    elem.style.fontSize = "24px";
});

elem.addEventListener("mouseover", function() {
    // Change the background color of the element
    elem.style.backgroundColor = "yellow";
});

elem.addEventListener("mouseout", function() {
    // Change the background color of the element
    elem.style.backgroundColor = "white";
});

calculateButton.addEventListener("click", function() {
    // Get the input values
    var num1 = parseInt(num1Input.value);
    var num2 = parseInt(num2Input.value);

    // Perform the calculation
    var result = num1 + num2;

    // Display the result
    resultElem.innerHTML = "Result: " + result;
});

// Add an event listener to the window object
window.addEventListener("load", function() {
    // Code to be executed when the page has finished loading
    console.log("Page has finished loading!");
});