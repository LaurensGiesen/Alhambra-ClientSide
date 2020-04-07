"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    pollGameAuth(function(){
        loadGameId();
        loadLobbyTable();
        document.querySelector("main section h5").addEventListener("click", clickPlayerReady);
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
        playerListHTML += `<article>
                                    <h3>${player}</h3>
                                    <p class="notReady">Not Ready</p>
                                </article>`;
    }

    playerList.innerHTML = playerListHTML;
}

function clickPlayerReady(e){
    e.preventDefault();
    setPlayerStatusReady(function(response){
       if(response){
           loadPlayers();
           const readyButton = document.querySelector("main section h5");
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
            const readyButton = document.querySelector("main section h5");
            readyButton.innerHTML = "Ready?";
            readyButton.removeEventListener("click", clickPlayerNotReady);
            readyButton.addEventListener("click", clickPlayerReady);
        }
    });
}
