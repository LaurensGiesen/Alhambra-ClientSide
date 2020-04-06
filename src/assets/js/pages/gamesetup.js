"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    document.querySelector('form').addEventListener("submit", submitNewGame);
    document.querySelector('form input[type=submit]').addEventListener("mouseover", letHammerFall);
    document.querySelector('form input[type=submit]').addEventListener("mouseout", letHammerNotFall);
}

function submitNewGame(e) {
    e.preventDefault();
    createGame(function(response){
        joinGame(response, function(){
            window.location.href = "gamelobby.html";
        })
    });
}
let backgroundHammer = document.querySelector("#submit");

function letHammerFall() {
    backgroundHammer.style.transform = "rotate(45deg)";
}
function letHammerNotFall() {
    backgroundHammer.style.transform = "rotate(0deg)";
}
