"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector("form").addEventListener("submit", logPlayerName);
}

function logPlayerName(e) {
    e.preventDefault();
    const playerName = e.target.elements.playername.value;
    if (validatePlayerName(playerName)) {
        storePlayerName(playerName);
        window.location.href = "html/gamemenu.html";
    } else {
        showError();
    }
}

function showError() {
    document.querySelector("#errormessage").style.display = 'block';
}
