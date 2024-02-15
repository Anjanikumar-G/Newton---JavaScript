//Write your code here
function createDiv(width, height, text) {
    // Create a new <div> element
    var newDiv = document.createElement('div');

    // Set the width and height of the <div> element
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content of the <div> element
    newDiv.textContent = text;

    // Set the background color of the <div> element to blue
    newDiv.style.backgroundColor = 'blue';

    // Append the newly created <div> element to the container element with the ID 'container'
    var container = document.getElementById('container');
    container.appendChild(newDiv);
}

//Example usage:
// createDiv(200, 100, "Hello, World!");



// Do not change this code
Window.createDiv = createDiv;