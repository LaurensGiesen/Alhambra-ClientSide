"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    document.querySelector('form').addEventListener("submit", submitNewGame);
}

function submitNewGame(e) {
    e.preventDefault();
    createGame(function(response){
        joinGame(response, function(){
            window.location.href = "gamelobby.html";
        })
    });
}
