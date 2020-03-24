"use strict";

let _games = null;
let _playerToken = null;

document.addEventListener('DOMContentLoaded',init);

function init() {
    document.querySelector('form').addEventListener("submit", createNewGame);
}


function createNewGame(e) {
    e.preventDefault();

    const playerName = localStorage.getItem('playername');

    fetchFromServer(`${config.root}games?details=true&prefix=group${config.groupnumber}`, 'GET').then(function (response) {
        _games = response;

    if (_games.length > 12){
        window.alert("All the lobby's are currently being used.");
    } else {
    fetchFromServer(`${config.root}games`, 'POST', {prefix:`group${config.groupnumber}` }).then(function (response) {
        _games = response;
        joinGame(_games,playerName);
    });
}});

function joinGame(_games,playerName) {
    fetchFromServer(`${config.root}games/${_games}/players`, 'POST', {playerName: `${playerName}`}).then(function(response){
        _playerToken = response;
        localStorage.setItem("playerToken", _playerToken);
        window.location.href = "game-lobby.html";
    });
}}
