"use strict";

let _games = null;
let _playerToken = null;

document.addEventListener('DOMContentLoaded',init);

function init(){
    getGroup();
    document.querySelector(".popUpDeactive form input").addEventListener('click', goTo);
    document.querySelector("input.joinButton").addEventListener('click', joinGame);

}
function goTo(e){
    e.preventDefault();
    window.location.href = "game-setup.html";
}

function getGroup() {

    fetchFromServer(`${config.root}games?details=true&prefix=group${config.groupnumber}`, 'GET').then(function (response) {
        _games = response;

        while (_games.length > 12){
            _games.pop();
        }

        for (let i = 0; i < _games.length; i++) {
            const towerLoading = document.querySelector('main figure:nth-child(' + (i+1) + ')');
            towerLoading.innerHTML =
                `<img src="../assets/media/icons/toweractive.png" alt="Tower" title="tower" class="active" id="id${i}">`;
        }
    });
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
        window.location.href = "game-lobby.html";
    });
}

