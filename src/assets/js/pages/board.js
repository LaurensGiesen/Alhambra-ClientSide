"use strict";
let _turnStarted = false;

document.addEventListener('DOMContentLoaded',init);

function init(){
    // Load game into _game
    pollGameAuth(function(){
        loadPlayers(); // Load players onto the board
        loadBanks(); // Load public bank and personal bank onto the board
        loadPublicMarket();
        goToLeaderboard();
        loadAlhambra();
        loadPersonalReserve();
        pollSwitchTurn();
    });


    // Options functionality
    document.querySelector("#options img").addEventListener('click', openOptionsPopup);
    document.querySelector("#options .popup header h3").addEventListener('click', closeOptionsPopup);
    document.querySelector("#options .popup #resume").addEventListener('click', closeOptionsPopup);
    document.querySelector("#options .popup #rules").addEventListener('click', openRules);
    document.querySelector("#options .popup #leave").addEventListener('click', openLeaveWarning);
    document.querySelector("#options .popup #leaveyes").addEventListener('click', leaveGame);
    document.querySelector("#options .popup #leaveno").addEventListener('click', openOptionsPopup);
    // Alhambra functionality
    scrollToFountain();
    document.addEventListener('keydown', shortcutsAlhambra);
}

function pollSwitchTurn(){
    setTimeout(pollSwitchTurn, config.pollingTime);
    if(_turnStarted === false && isPlayerActive(_playerName)){
        switchTurn();
        _turnStarted = true;
    } else if(_turnStarted === true && !isPlayerActive(_playerName)){
        switchTurn();
        _turnStarted = false;
    }
}

function switchTurn(){
    loadPlayers();
    loadBanks();
    loadPublicMarket();
    loadPersonalReserve();
    loadAlhambra();
}

function displayError(){
    const errors = document.querySelector("#errors");
    errors.style.display = "block";
    setTimeout(
        function(){errors.style.display = "none";},3000);
}
