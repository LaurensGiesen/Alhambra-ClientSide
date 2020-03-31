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
    });
}

function getPlayerOfJoinedGame(name, callback){
    getJoinedGame(function(game){
       for(const player of game.players){
           console.log(player.name);
           if(player.name === name){
               callback(player);
           }
       }
    });
}
