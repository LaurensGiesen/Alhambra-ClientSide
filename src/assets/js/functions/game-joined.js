"use strict";

/*
* All functionality for games the player has joined.
* The player has authorization.
* */

function getJoinedGame(callback){
    fetchFromServer(`${config.root}games/${_gameId}`, 'GET').then(function (game) {
        callback(game);
    });
}

function hasGameStarted(callback){
    getJoinedGame(function(game){
        callback(game.started);
    })
}

