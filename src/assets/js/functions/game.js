"use strict";

/*
* All functionality around creating games, deleting games, joining games.
* */

function createGame(callback){
    fetchFromServer(`${config.root}games`, 'POST', {prefix: `group${config.groupnumber}`}).then(function (response) {
        callback(response);
    });
}

function joinGame(gameId, callback) {
    fetchFromServer(`${config.root}games/${gameId}/players`, 'POST', {playerName: `${_playerName}`}).then(function(response){
        localStorage.setItem("playerToken", response);
        localStorage.setItem("gameId", gameId);
        callback();
    });
}

function deleteSelfFromGame(callback){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}`, 'DELETE', {}).then(function(response){
        callback(response);
    });
}

