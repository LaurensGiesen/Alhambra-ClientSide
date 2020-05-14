"use strict";

document.addEventListener('DOMContentLoaded',init);










const backgroundHammer = document.querySelector("#submit");
const createKingdom = document.querySelector("form label");
const joinGame = document.querySelector(".join");

function init() {
    document.querySelector('.create').addEventListener("click", submitNewGame);
    document.querySelector('form').addEventListener("mouseover", letHammerFall);
    document.querySelector('form').addEventListener("mouseout", letHammerNotFall);
    joinGame.addEventListener("click", goToJoinGame);
}

function submitNewGame(e) {
    e.preventDefault();
    createGame(function(response){
        joinGame(response, function(){
            window.location.href = "gamelobby.html";
        })
    });
}

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
function goToJoinGame() {
    window.location.href = "match.html";
}

