"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    document.querySelector("h5").addEventListener("click", readyUp);
}

function readyUp(e) {
    e.preventDefault();

    const split1 = _playerToken.split('+');
    const playerName = localStorage.getItem('playername');

    _gameId = split1[0];

    let notReadyChange = document.querySelector("h5");

    notReadyChange.innerHTML = "Not Ready";

    let readyOnPLayer = document.querySelector('[data-player="michiel"]');


    let readyOnPlayerPicture = readyOnPLayer.querySelector("h4");


    fetchFromServer(`${config.root}games/${_gameId}/players/${playerName}/ready`, 'PUT').then(function(response){

        readyOnPLayer.className = "ready";
        readyOnPlayerPicture.innerHTML = "Ready";

    });
    document.querySelector("h5").removeEventListener("click", readyUp);
    document.querySelector("h5").addEventListener("click", notReady);
}

function notReady(e) {
    e.preventDefault();

    const split1 = _playerToken.split('+');
    const playerName = localStorage.getItem('playername');

    _gameId = split1[0];

    let notReady = document.querySelector("h5");

    notReady.innerHTML = "Ready";

    let readyOnPLayer = document.querySelector('[data-player="michiel"]');


    let readyOnPlayerPicture = readyOnPLayer.querySelector("h4");


    fetchFromServer(`${config.root}games/${_gameId}/players/${playerName}/ready`, 'DELETE').then(function (response) {
        readyOnPLayer.className = "notReady";
        readyOnPlayerPicture.innerHTML = "Not Ready";
    });
    document.querySelector("h5").removeEventListener("click", notReady);
    document.querySelector("h5").addEventListener("click", readyUp);
}