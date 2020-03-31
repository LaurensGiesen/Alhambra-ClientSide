"use strict";

/*
* All functionality for games the player has joined.
* The player has authorization.
* */

function hasGameStarted(callback){
    fetchFromServer(`${config.root}games/${_gameId}`, 'GET').then(function (game) {
        callback(game.started);
    });
}
