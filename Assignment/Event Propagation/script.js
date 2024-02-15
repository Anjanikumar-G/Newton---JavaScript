let a=document.getElementById('myAnchor')
    a.addEventListener("click", function(event) {
    event.preventDefault();
});

let check=document.getElementById("check");

function func1(event) {   
    console.log("DIV 1 is clicked.");
    if(check.checked){
        event.stopPropagation();
    }
}

