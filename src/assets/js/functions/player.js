"use strict";

function storePlayerName(playerName) {
    localStorage.setItem("playerName", playerName);
}

function validatePlayerName(playerName){
    //check if only lowercase or numbers, max lenght is 20 and not empty
    return (/^[a-z0-9]*$/).test(playerName) && playerName.length <= config.maxLengthPlayerName && playerName.length > 0;
}

function setPlayerStatusReady(callback){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/ready`, 'PUT').then(function (response) {
        callback(response);
    });
}

function setPlayerStatusNotReady(callback){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/ready`, 'DELETE').then(function (response) {
        callback(response);
    });
}
