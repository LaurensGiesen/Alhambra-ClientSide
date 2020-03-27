"use strict";

let _games = null;
let _playerToken = null;

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelector(".popUpDeactive form input").addEventListener('click', goTo);
    document.querySelector("input.joinButton").addEventListener('click', joinGame);

}
function goTo(e){
    e.preventDefault();
    window.location.href = "gamesetup.html";
}

function joinGame(e) {
    e.preventDefault();
    const playerName = localStorage.getItem('playername');
    const h3 = document.querySelector("div.titelPopUp h3").innerHTML;
    console.log(h3);
    console.log(playerName);

    fetchFromServer(`${config.root}games/${h3}/players`, 'POST', {playerName: `${playerName}`}).then(function(response){
        _playerToken = response;
        console.log(_playerToken);
        localStorage.setItem("playerToken", _playerToken);
        window.location.href = "gamelobby.html";
    });
}

