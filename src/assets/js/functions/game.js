"use strict";

/*
* All functionality around creating games, deleting games, joining games.
* */
let _game;


function createGame(callback){
    fetchFromServer(`${config.root}games`, 'POST', {prefix: `group${config.groupnumber}`}).then(function (response) {
        callback(response);
    });
}

function joinGame(gameId, callback) {
    fetchFromServer(`${config.root}games/${gameId}/players`, 'POST', {playerName: `${_playerName}`}).then(function(response){
        if(!response.failed){
            localStorage.setItem("playerToken", response);
            localStorage.setItem("gameId", gameId);
            callback();
        } else {
            alert(response.cause);
        }

    });
}

function deleteSelfFromGame(callback){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}`, 'DELETE', {}).then(function(response){
        callback(response);
    });
}

function getNumberOfGames(number, callback){
    fetchFromServer(`${config.root}games?details=true&prefix=group${config.groupnumber}`, 'GET').then(function (games) {
        while (games.length > number){
            games.pop();
        }
        callback(games);
    });
}

function getGame(gameId, callback){
    fetchFromServer(`${config.root}games?details=true`, 'GET').then(function (games) {
        for(const game of games){
            if(game.id == gameId){
                callback(game);
            }
        }
    });
}

function getNumberOfPlayers(gameId, callback){
    getGame(gameId, function(game){
        callback(game.playerCount);
    });
}

