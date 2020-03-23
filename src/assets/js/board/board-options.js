"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelector("#options img").addEventListener('click', openPopup);
}

function openPopup(e){
    e.preventDefault();
    document.querySelector("#options .popup").style.display = "flex";
}