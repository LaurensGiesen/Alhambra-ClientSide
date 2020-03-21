"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    console.log("Got here");
    document.querySelectorAll("main figure").forEach((element) => {
        element.addEventListener('click', open)});
    document.querySelector(".close").addEventListener("click", close);
    document.querySelector(".close2").addEventListener("click", closeAgain);
}

let popUp = document.querySelector("#popUp");
let popUpNot = document.querySelector("#popUpNot");


// open de popup
function open(e) {
    console.log("E:");
    console.log(e);
    e.preventDefault();
    if ( e.target.className  === "active"){
        popUp.style.display = "block";
        console.log(e.target);
        let fig = e.target.id.substring(2);
        console.log("FIG:");
        console.log(fig);
        document.querySelector("div.titelPopUp").innerHTML =
            `<h3> ${_gameId[fig].id}</h3>
                <h4> ${_gameId[fig].playerCount}/6 </h4>`
        // popUp.innerHTML =
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

