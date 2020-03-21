"use strict";

let _gameId = null;
let _playerToken = null;

document.addEventListener('DOMContentLoaded',init);

function init() {
    console.log("Pagina geladen");
    document.querySelector('form').addEventListener("submit", createNewGame);
}


function createNewGame(e) {
    console.log("hier ben je al");

    e.preventDefault();

    let playerName = localStorage.getItem('playername');
    console.log(playerName);

    fetchFromServer(`${config.root}games`, 'POST', {prefix:`group${config.groupnumber}` }).then(function (response) {
        _gameId = response;
        console.log(_gameId);

        joinGame(_gameId,playerName);
    })
}

function joinGame(_gameId,playerName) {

    fetchFromServer(`${config.root}games/${_gameId}/players`, 'POST', {playerName: `${playerName}`}).then(function(response){
        _playerToken = response;
        console.log(_playerToken);
        // window.location.href = "game-lobby.html";
    })
}