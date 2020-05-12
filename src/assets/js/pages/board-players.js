"use strict";

function loadPlayers(){
    console.log(_gameAuth);
    const isActivePlayer = isPlayerActive(_playerName);
    if(!isActivePlayer){
        setTimeout(loadPlayers, config.pollingTime);
    }

    let playersArea = "";
    for(const player of _gameAuth.players){
        playersArea += getPlayersHTML(player, _gameAuth.currentPlayer);
    }
    document.querySelector("#players section").innerHTML = playersArea;

    document.querySelectorAll("#players section article h3").forEach((element) => {
        element.addEventListener('mouseover', openPopUp);});
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
