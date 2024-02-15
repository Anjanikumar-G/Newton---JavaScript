// your js code goes here

function toggleVisibility() {
    const paraNode = document.getElementById('useless-paragraph');
    if (paraNode.style.display === "none") {
        paraNode.style.display = "block";
    } else {
        paraNode.style.display = "none";
    }
}