"use strict";

function pollPersonalReserve(){
    setTimeout(pollPersonalReserve, config.pollingTime);
    dragstartTile();

    let reserve = _gameAuth.players.reserve;
    console.log(reserve);
    let personalReserveHTML = document.querySelector("#personalreserve");
        reserve.innerHTML += `
                <article class="tile ${market.type} ${wallsClass}" data-type="${market.type}" data-cost="${market.cost}" data-walls="${walls}">
                    <img src="../assets/media/icons/${market.type}.png" alt="${market.type}" draggable="false">
                    <h4>${market.cost}</h4>
                </article>
    `
}