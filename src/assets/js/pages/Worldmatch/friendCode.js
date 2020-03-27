"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.querySelector("#submit").addEventListener('click', inputFriendCode);
}

function inputFriendCode(e) {
    e.preventDefault();
    let playerName = localStorage.getItem('playername');
    let lobby = document.querySelector("#Friend").value;

    fetchFromServer(`${config.root}games/${lobby}/players`, 'POST', {playerName: `${playerName}`}).then(function(response){
        _playerToken = response;
        console.log(_playerToken);
        localStorage.setItem("playerToken", _playerToken);
        window.location.href = "gamelobby.html";
    })
}