"use strict";

let personalReserveHTML = document.querySelector("#personalreserve div");

function pollPersonalReserve(){
    setTimeout(pollPersonalReserve, config.pollingTime);

    let playertjeeeeee = _gameAuth.players;

    console.log(playertjeeeeee);

    for (let i = 0; i < playertjeeeeee.length; i++) {
        console.log(playertjeeeeee[i].name);
        if (playertjeeeeee[i].name === _playerName) {
            let kenkl = playertjeeeeee[i].reserve;
            personalReserveHTML.innerHTML = "";

            for(let i = 0; i < kenkl.length; i++) {
                let reserve = kenkl[i];
                personalReserveHTML.innerHTML += `
                <article class="tile ${reserve.type}" data-type="${reserve.type}" data-cost="${reserve.cost}" data-walls="${reserve.walls}">
                    <img src="../assets/media/icons/${reserve.type}.png" alt="${reserve.type}" draggable="false">
                    <h4>${reserve.cost}</h4>
                </article>`;
            }




        }
    }


}