"use strict";
let _otherPlayerDetailsIsOpen = false;

function openOtherPlayerDetails(e) {
    e.preventDefault();
    _otherPlayerDetailsIsOpen = true;
    const popUp = document.querySelector("#playerDetails .popup");
    const content = document.querySelector("#playerDetails .popup .popup-content");

    popUp.style.display = 'flex';
    content.style.display = 'flex';

    const playerName = e.target.querySelector("h3").innerHTML;
    content.innerHTML = getHTMLOtherPlayerDetails(playerName);

    document.querySelectorAll("#players #otherPlayers").forEach((element) => {
        element.addEventListener("mouseleave", closePopUp);});
}

function closePopUp() {
    const popUp = document.querySelector("#playerDetails .popup");
    const content = document.querySelector("#playerDetails .popup .popup-content");
    popUp.style.display = 'none';
    content.style.display = 'none';
    _otherPlayerDetailsIsOpen = false;
    loadPlayers();
}


function getHTMLOtherPlayerDetails(playerName) {
    const player = getPlayer(playerName);

    return `
        <header>
            <h2>${player.name}</h2>
        </header>
        <section id="otherAlhambra">${alhambraHTML(player.name)}</section>
        <section id="otherBank">
            <h3>Bank</h3>
            ${getOtherBankHTML(playerName)}
        </section>
        <section id="otherReserve">
            <h3>Reserve</h3>
            ${getOtherReserveHTML(playerName)}
        </section>`;
}

function getOtherBankHTML(playerName) {
    const money = getPersonalBank(playerName);
    let html = "";
    for(const coin of money){
        html += getCoinHTML(coin);
    }
    return html;
}

function getOtherReserveHTML(playerName) {
    const reserve = getPersonalReserve(playerName);

    let html = "";
    for(let i = 0; i < reserve.length; i++) {
        const tile = reserve[i];
        html += getHTMLTile(tile);
    }
    return html;
}
