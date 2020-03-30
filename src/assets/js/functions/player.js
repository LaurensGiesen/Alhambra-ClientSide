"use strict";

function storePlayerName(playerName) {
    localStorage.setItem("playerName", playerName);
}

function validatePlayerName(playerName){
    //check if only lowercase or numbers, max lenght is 20 and not empty
    return (/^[a-z0-9]*$/).test(playerName) && playerName.length <= config.maxLengthPlayerName && playerName.length > 0;
}