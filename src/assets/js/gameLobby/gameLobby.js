"use strict";

document.addEventListener('DOMContentLoaded',init);
let randomNumber = Math.floor(Math.random() * 999999999);

function init(){
    document.querySelector("h5").addEventListener("click", ready);
    random()
}
let div = document.querySelector(".twee div:nth-child(3)");


function random() {
    document.querySelector('header p').innerHTML = `#${randomNumber}`;
    document.querySelector('.timerp').innerHTML = '10'
}

function ready() {
    if (div.className === "notReady") {
        div.className = "ready";
        document.querySelector(".twee div:nth-child(3) h4").innerHTML= "Ready";
        document.querySelector("h5").innerHTML = "Not Ready?"
    }else{
        div.className = "notReady";
        document.querySelector(".twee div:nth-child(3) h4").innerHTML= "Not Ready";
        document.querySelector("h5").innerHTML = "Ready Up!"
    }
}
