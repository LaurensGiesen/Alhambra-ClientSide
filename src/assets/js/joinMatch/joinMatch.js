"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelectorAll("main figure img").forEach((element) => {
        element.addEventListener('click', open)});
    document.querySelector(".close").addEventListener("click", close);
}

let modal = document.querySelector("#popUp");

// When the user clicks the button, open the modal
function open(e) {
    e.preventDefault();
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
function close(e){
    e.preventDefault();
    modal.style.display = "none";
}

