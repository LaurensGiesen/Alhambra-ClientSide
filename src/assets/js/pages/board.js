"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    // Load game into _game
    pollGameAuth(function(){
        loadPlayers(); // Load players onto the board
        loadBanks(); // Load public bank and personal bank onto the board
        loadPublicMarket();
        //loadPublicMarket();
        //loadPersonalReserve();
        //loadAlhambra();
    });


    // Options functionality
    document.querySelector("#options img").addEventListener('click', openOptionsPopup);
    document.querySelector("#options .popup header h3").addEventListener('click', closeOptionsPopup);
    document.querySelector("#options .popup #resume").addEventListener('click', closeOptionsPopup);
    document.querySelector("#options .popup #rules").addEventListener('click', openRules);
    document.querySelector("#options .popup #leave").addEventListener('click', openLeaveWarning);
    document.querySelector("#options .popup #leaveyes").addEventListener('click', leaveGame);
    document.querySelector("#options .popup #leaveno").addEventListener('click', openOptionsPopup);
    // document.querySelector("#popUp").addEventListener("mouseover", openPopUp);
    // document.querySelectorAll("#popUp").forEach((element) => {
    //     element.addEventListener('mouseover', openPopUp);});

    // Alhambra functionality
    scrollToFountain();
    document.addEventListener('keydown', shortcutsAlhambra);
}
