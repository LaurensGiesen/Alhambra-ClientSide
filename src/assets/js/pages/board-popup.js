"use strict";

const popUp = document.querySelector("#playerDetails .popup");
const content = document.querySelector("#playerDetails .popup .popup-content");

function openPopUp(e) {
    e.preventDefault();
    console.log("dit werkt");

    console.log(popUp);
    console.log(content);

    popUp.style.display = 'flex';
    content.style.display = 'block';

    document.querySelector("#players .popup").addEventListener("mouseout", closePopUp);

}

function closePopUp() {
    popUp.style.display = 'none';
    content.style.display = 'none';
}