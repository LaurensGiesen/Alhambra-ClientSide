"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelector("form").addEventListener("submit", logPlayername);
}

function logPlayername(e){
    e.preventDefault();
    const playername = e.target.elements.playername.value;
    if(validatePlayername(playername)){
        storePlayername(playername);
        window.location.href = "html/game-menu.html";
    } else {
        showError();
    }
}

function storePlayername(playername) {
    localStorage.setItem("playername", playername);
}

function showError(){
    document.querySelector("#errormessage").style.display = 'block';
}

function validatePlayername(playername){
    //check if only lowercase or numbers
    //max lenght is 20
    //not empty
    return (/^[a-z0-9]*$/).test(playername) && playername.length <= 20 && playername.length > 0;
}
