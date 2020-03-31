"use strict";

function pollPlayers(){
    setTimeout(pollPlayers, 1000);

    getJoinedGame(function(game){
        let playersArea = "";
        for(const player of game.players){
            playersArea += getPlayersHTML(player, game.currentPlayer);
        }
        document.querySelector("#players").innerHTML = playersArea;
    });
}

function getPlayersHTML(player, currentPlayer){
    let activeClass;
    if(player.name === currentPlayer){
        activeClass = "active";
    } else {
        activeClass = "deactive";
    }
    return `<article class="${activeClass}" data-name="${player.name}">
        <h3>${player.name}</h3>
        <p>${player.score}</p>
        </article> `;
}
