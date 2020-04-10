"use strict";



function loadPersonalReserve(){
    const personalReserve = getPersonalReserve(_playerName);

    let personalReserveInnerHTML = "";
    for(let i = 0; i < personalReserve.length; i++) {
        let tile = personalReserve[i];
        personalReserveInnerHTML += getHTMLTile(tile);

    }

    document.querySelector("#personalreserve div").innerHTML = personalReserveInnerHTML;

    if(isPlayerActive(_playerName)){
        makeReserveTilesDraggable();
    }

}
