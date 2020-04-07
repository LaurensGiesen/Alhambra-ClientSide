"use strict";

/*
* All functionality for games the player has joined.
* The player has authorization.
* */

let _gameAuth = null;

function pollGameAuth(callback){
    fetchFromServer(`${config.root}games/${_gameId}`, 'GET').then(function (game) {
        _gameAuth = game;
        //console.log(_gameAuth);
        if(callback){
            callback();
        }

    });
    setTimeout(function(){pollGameAuth();}, config.pollingTime);
}

function hasGameStarted(){
    return _gameAuth.started;
}
function getNumberOfPlayersAuth(){
    return _gameAuth.players.length;
}
function getPlayers(){
    return _gameAuth.players;
}
function getPlayer(name){
    for(const player of _gameAuth.players){
        if(player.name === name){
            return player;
        }
    }
    return null;
}
function getAlhambra(playerName){
    const player = getPlayer(playerName);
    return player.city;
}
function getLocationFountain(city){
    for(let col = 0; col < city.length; col++){
        for(let row = 0; row < city[col].length; row++){
            if(city[col][row] != null && city[col][row].type == null){
                return {"row": row, "col":col};
            }
        }
    }
    return null;
}


function isPlayerActive(name){
    return _gameAuth.currentPlayer === name;
}

function takeMoney(coins, callback){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/money`, 'POST', coins).then(function () {
        pollGameAuth(function(){
            callback();
        });
    });
}

function buyBuilding(currency, coins, callback){
    const body = {"currency": currency, "coins": coins};
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/buildings-in-hand`, 'POST', body).then(function (response) {
       _gameAuth = response;
       console.log(_gameAuth);
       callback();
    });
}

function placeBuildingInReserve(building, callback){
    const body = {"building": building, "location": null};
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city`, 'POST', body).then(function (response) {
        _gameAuth = response;
        callback();
    });
}

function getAvailableLocations(walls, callback){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city/locations?north=${walls.north}&east=${walls.east}&south=${walls.south}&west=${walls.west}`,
                'GET'
    ).then(function (response) {
        callback(response);
    });
}
