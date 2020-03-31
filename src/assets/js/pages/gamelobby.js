"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    loadGameId();
    loadLobbyPolling();
    document.querySelector("main section h5").addEventListener("click", clickPlayerReady);
}

function loadLobbyPolling(){
    setTimeout(loadLobbyPolling, 1500);
    checkGameStarted();
    loadNumberOfPlayers();
    loadPlayers();
}

function checkGameStarted() {
    hasGameStarted(function(hasStarted){
        if(hasStarted){
            window.location.href = "board.html";
        }
    });
}

function loadGameId(){
    document.querySelector("header p").innerHTML = _gameId;
}

function loadNumberOfPlayers() {
    getNumberOfPlayers(_gameId, function (response) {
        document.querySelector("main header span").innerHTML = response + "/" + config.maxNumberOfParticipants;
    });
}

function loadPlayers(){
    const playerList = document.querySelector("main section");

    getPlayers(_gameId, function(players){
        let playerListHTML = "";

        for(let player of players){
            playerListHTML += `<article>
                                    <h3>${player}</h3>
                                    <p class="notReady">Not Ready</p>
                                </article>`;
        }

        playerList.innerHTML = playerListHTML;
    });
}

function clickPlayerReady(e){
    e.preventDefault();
    setPlayerStatusReady(function(response){
       if(response){
           loadPlayers();
           let readyButton = document.querySelector("main section h5");
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
            let readyButton = document.querySelector("main section h5");
            readyButton.innerHTML = "Ready?";
            readyButton.removeEventListener("click", clickPlayerNotReady);
            readyButton.addEventListener("click", clickPlayerReady);
        }
    });
}
