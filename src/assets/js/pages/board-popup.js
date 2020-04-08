"use strict";

const popUp = document.querySelector("#playerDetails .popup");
const content = document.querySelector("#playerDetails .popup .popup-content");
const welcomePlayer = document.querySelector("#playerDetails .popup-content div");

function openPopUp(e) {
    e.preventDefault();
    console.log("dit werkt");

    popUp.style.display = 'block';
    content.style.display = 'block';

    let playerName = e.target.innerHTML;
    console.log(playerName);

    welcomePlayer.innerHTML = `<p>You're looking at ${playerName}'s Game-Board</p>`;

    document.querySelectorAll("#players section").forEach((element) => {
        element.addEventListener("mouseout", closePopUp);});
}

function closePopUp() {
    popUp.style.display = 'none';
    content.style.display = 'none';
}
