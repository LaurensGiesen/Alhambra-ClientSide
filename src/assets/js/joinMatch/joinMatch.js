"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelectorAll("main figure img").forEach((element) => {
        element.addEventListener('click', open)});
    document.querySelector(".close").addEventListener("click", close);
    document.querySelector(".close2").addEventListener("click", closeAgain);
}

let popUp = document.querySelector("#popUp");
let popUpNot = document.querySelector("#popUpNot");


// open de popup
function open(e) {
    e.preventDefault();
    if ( e.target.className  === "active"){
        popUp.style.display = "block";
    }
    else{
        popUpNot.style.display = "block";
    }

}
// sluit pop up
function close(){
    popUp.style.display = "none";
}
function closeAgain(){
    popUpNot.style.display = "none";
}


