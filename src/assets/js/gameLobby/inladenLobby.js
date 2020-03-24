"use strict";

let _games = null;
let _gameId = null;

document.addEventListener('DOMContentLoaded',init);

function init() {
    loadingLobby();
}

const _playerToken = localStorage.getItem('playerToken');

function loadingLobby() {

    const split1 = _playerToken.split('+');
    _gameId = split1[0];

    fetchFromServer(`${config.root}games/${_gameId}`, 'GET')
        .then(function (response) {

        if(!response.started) {
            setTimeout(loadingLobby, 1000);
            showDetails(response);
        }

    });
}

function showDetails(response) {

    const playerCount = response.playerCount;
    const playerAlreadyExisting = document.querySelectorAll("section.twee div h3");
    const playerName = response.players;
    const addPlayerStroke = document.querySelector("section.twee");

    if(playerCount !== playerAlreadyExisting.length){
        addPlayerStroke.innerHTML = "";
        for (let i = 0; i < playerCount; i++) {
                addPlayerStroke.innerHTML +=
                    `<div class="notReady">
                    <h3>${playerName[i]}</h3>
                    <h4>Not Ready</h4>
                </div>`;
            }
    }

    document.querySelector("header p").innerHTML = _gameId;

    document.querySelector("div.eerst").innerHTML =
        `<h2>Joined players:</h2>
         <p>${playerCount}/6</p>`;
}
