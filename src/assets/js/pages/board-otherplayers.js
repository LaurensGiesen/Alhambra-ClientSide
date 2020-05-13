"use strict";

const popUp = document.querySelector("#playerDetails .popup");
const content = document.querySelector("#playerDetails .popup .popup-content");
//const contentPlayerDetails = document.querySelector("#playerDetails .popup-content div");


function openOtherPlayerDetails(e) {
    e.preventDefault();
    popUp.style.display = 'flex';
    content.style.display = 'flex';

    const playerName = e.target.querySelector("h3").innerHTML;
    content.innerHTML = getHTMLOtherPlayerDetails(playerName);
    // let playerName = e.target.querySelector("h3").innerHTML;
    //
    // let otherPlayer = getPlayer(playerName);
    //
    //
    //
    // contentPlayerDetails.innerHTML = `
    //     <header>
    //         <h2>PlayerName</h2>
    //     </header>
    //     <section id="otherAlhambra">
    //
    //     </section>
    //     <section id="otherBank">
    //
    //     </section>
    //     <section id="otherReserve">
    //
    //     </section>
    //
    // `;

    document.querySelectorAll("#players #otherPlayers").forEach((element) => {
        element.addEventListener("mouseleave", closePopUp);});
}

function closePopUp() {
    popUp.style.display = 'none';
    content.style.display = 'none';
}


function getHTMLOtherPlayerDetails(playerName) {
    let player = getPlayer(playerName);

    return `
        <header>
            <h2>${player.playerName}</h2>
        </header>
        <section id="otherAlhambra">${alhambraHTML(player.playerName)}</section>
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


