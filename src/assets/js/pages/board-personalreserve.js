"use strict";

let personalReserveHTML = document.querySelector("#personalreserve div");

function loadPersonalReserve(){
    let player = _gameAuth.players;

    for (let i = 0; i < player.length; i++) {
        if (player[i].name === _playerName) {
            let personalReserve = player[i].reserve;
            personalReserveHTML.innerHTML = "";

            for(let i = 0; i < personalReserve.length; i++) {
                let reserve = personalReserve[i];
                personalReserveHTML.innerHTML += `
                <article class="tile ${reserve.type}" data-type="${reserve.type}" data-cost="${reserve.cost}" data-walls="${reserve.walls}">
                    <img src="../assets/media/icons/${reserve.type}.png" alt="${reserve.type}" draggable="false">
                    <h4>${reserve.cost}</h4>
                </article>`;
            }
        }
    }


}