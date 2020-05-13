"use strict";

function loadPlayers(){
    const isActivePlayer = isPlayerActive(_playerName);
    if(!isActivePlayer && !_otherPlayerDetailsIsOpen){
        setTimeout(loadPlayers, config.pollingTime);
    }

    let playersArea = "";
    for(const player of _gameAuth.players){
        playersArea += getPlayersHTML(player, _gameAuth.currentPlayer);
    }
    document.querySelector("#players #otherPlayers").innerHTML = playersArea;

    document.querySelectorAll("#players #otherPlayers article").forEach((element) => {
        element.addEventListener('mouseenter', openOtherPlayerDetails);});
}

function getPlayersHTML(player, currentPlayer){
    let activeClass;
    if(player.playerName === currentPlayer){
        activeClass = "active";
    } else {
        activeClass = "deactive";
    }
    return `<article class="${activeClass}" data-name="${player.playerName}">
        <h3>${player.playerName}</h3>
        <p>${player.score}</p>
        </article> `;
}
