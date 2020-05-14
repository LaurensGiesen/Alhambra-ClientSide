"use strict";

/*
* All functionality for games the player has joined.
* The player has authorization.
* */

let _gameAuth = null;

function pollGameAuth(callback) {
    fetchFromServer(`${config.root}games/${_gameId}`, 'GET').then(function (game) {
        _gameAuth = game;
        if (callback) {
            callback();
        }
    });
    setTimeout(function(){pollGameAuth();}, config.pollingTime);
}

function hasGameStarted() {
    return _gameAuth.started;
}

function getNumberOfPlayersAuth() {
    return _gameAuth.players.length;
}

function getPlayers() {
    return _gameAuth.players;
}

function getPlayer(name) {
    for (const player of _gameAuth.players) {
        if (player.playerName === name) {
            return player;
        }
    }
    return null;
}

function getPersonalReserve(playerName) {
    const player = getPlayer(playerName);
    return player.reserve;
}

function getPersonalBank(playerName) {
    const player = getPlayer(playerName);
    return player.money;
}

function getAlhambra(playerName) {
    const player = getPlayer(playerName);
    return player.city;
}

function getLocationFountain(city) {
    for (let row = 0; row < city.length; row++) {
        for (let col = 0; col < city[row].length; col++) {
            if (city[row][col] != null && city[row][col].type == null) {
                return {"col": col, "row": row};
            }
        }
    }
    return null;
}

function isPlayerActive(name) {
    return _gameAuth.currentPlayer === name;
}

function takeMoney(coins, callback) {
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/money`, 'POST', coins).then(function (response) {
        processResponseFetch(response, callback);
    });
}

function buyBuilding(currency, coins, callback) {
    const body = {"currency": currency, "coins": coins};
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/buildings-in-hand`, 'POST', body).then(function (response) {
        console.log(response);
        if(response.hasOwnProperty("failed")){
            displayError(response.cause);
        } else {
            _gameAuth = response;
            loadPublicMarket();
            callback();
        }
    });
}

function placeBuildingInReserve(building, callback) {
    const body = {"building": building, "location": null};
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city`, 'POST', body).then(function (response) {
        processResponseFetch(response, callback);
    });
}

function placeBuildingOnAlhambra(building, location, callback) {
    const body = {"building": building, "location": location};
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city`, 'POST', body).then(function (response) {
        processResponseFetch(response, callback);
    });
}

function getAvailableLocations(walls, callback) {
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city/locations?north=${walls.north}&east=${walls.east}&south=${walls.south}&west=${walls.west}`,
        'GET'
    ).then(function (response) {
        callback(response);
    });
}

function removeBuildingFromAlhambra(location, callback){
    const body = {location};
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city`, 'PATCH', body).then(function (response) {
        processResponseFetch(response, callback);
    });
}

function patchBuildingOnAlhambra(building, location, callback){
    const body = {
        "building": building,
        "location": location
    };
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}/city`, 'PATCH', body).then(function (response) {
        processResponseFetch(response, callback);
    });
}

function processResponseFetch(response, callback) {
    if (response.hasOwnProperty("failed")) {
        displayError(response.cause);
    } else {
        _gameAuth = response;
        callback();
    }
}
