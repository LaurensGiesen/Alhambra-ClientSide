"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    document.querySelector('.create').addEventListener("click", submitNewGame);
    document.querySelector('form').addEventListener("mouseover", letHammerFall);
    document.querySelector('form').addEventListener("mouseout", letHammerNotFall);
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
let createKingdom = document.querySelector("form label");

function letHammerFall() {
    backgroundHammer.style.transform = "rotate(45deg)";
    createKingdom.style.color = "red";
    createKingdom.style.transition = "0.3s";

}
function letHammerNotFall() {
    backgroundHammer.style.transform = "rotate(0deg)";
    createKingdom.style.color = "black";
    createKingdom.style.transition = "0.3s";
}
