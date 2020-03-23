"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelector("#options img").addEventListener('click', openPopup);
    document.querySelector("#options .popup header h2").addEventListener('click', closePopup);
    document.querySelector("#options .popup #resume").addEventListener('click', closePopup);
    document.querySelector("#options .popup #rules").addEventListener('click', openRules);
    document.querySelector("#options .popup #leave").addEventListener('click', openWarning);
    document.querySelector("#options .popup #leaveyes").addEventListener('click', leaveGame);
    document.querySelector("#options .popup #leaveno").addEventListener('click', openPopup);
}

function openPopup(e){
    e.preventDefault();
    document.querySelector("#options .popup").style.display = "flex";
    document.querySelector("#options .popup .popup-content").style.display = "block";
    document.querySelector("#options .popup .popup-warning").style.display = "none";
}

function closePopup(e){
    e.preventDefault();
    document.querySelector("#options .popup").style.display = "none";
}

function openRules(e){
    e.preventDefault();
    window.open("rules.html", "_blank");
}

function openWarning(e){
    e.preventDefault();
    document.querySelector("#options .popup .popup-content").style.display = "none";
    document.querySelector("#options .popup .popup-warning").style.display = "flex";
}

function leaveGame(e){
    e.preventDefault();
    //TODO: logout from game
    window.location.href = "game-menu.html";
}