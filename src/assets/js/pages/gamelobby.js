"use strict";

document.addEventListener('DOMContentLoaded',init);

const readyButton = document.querySelector("main section h5");

function init(){
    pollGameAuth(function(){
        loadGameId();
        loadLobbyTable();
        readyButton.addEventListener("click", clickPlayerReady);
    });

}

function loadGameId(){
    document.querySelector("header p").innerHTML = _gameId;
}
function loadLobbyTable(){
    setTimeout(loadLobbyTable, config.pollingTime);
    checkGameStarted();
    loadNumberOfPlayers();
    loadPlayers();
}

function checkGameStarted() {
    if(hasGameStarted()){
        window.location.href = "board.html";
    }
}
function loadNumberOfPlayers() {
    const nPlayers = getNumberOfPlayersAuth();
    document.querySelector("main header span").innerHTML = nPlayers + "/" + config.maxNumberOfParticipants;
}
function loadPlayers(){
    const playerList = document.querySelector("main section");
    const players = getPlayers();

    let playerListHTML = "";

    for(const player of players){
        const ready = player.ready ? "Ready" : "Not Ready";
        const classReady = player.ready ? "ready" : "notReady";
        playerListHTML += `<article>
                                    <h3>${player.playerName}</h3>
                                    <p class="${classReady}">${ready}</p>
                                </article>`;
    }

    playerList.innerHTML = playerListHTML;
}

function clickPlayerReady(e){
    e.preventDefault();
    setPlayerStatusReady(function(response){
       if(response){
           loadPlayers();
           readyButton.innerHTML = "Wait longer?";
           readyButton.removeEventListener("click", clickPlayerReady);
           readyButton.addEventListener("click", clickPlayerNotReady);
       }
    });
}
function clickPlayerNotReady(e){
    e.preventDefault();
    setPlayerStatusNotReady(function(response){
        if(response){
            loadPlayers();
            readyButton.innerHTML = "Ready?";
            readyButton.removeEventListener("click", clickPlayerNotReady);
            readyButton.addEventListener("click", clickPlayerReady);
        }
    });
}
