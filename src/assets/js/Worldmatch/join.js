"use strict";
let _gameId = null;


document.addEventListener('DOMContentLoaded',init);

function init(){
    console.log("join page");
    getGroup();
    document.querySelector(".popUpDeactive form input").addEventListener('click', goTo);
    // document.querySelector("input.joinButton").addEventListener('click', joinGame);

}
function goTo(e){
    e.preventDefault();
    window.location.href = "game-setup.html";
}

function getGroup() {

    fetchFromServer(`http://172.21.22.52:48201/alhambra-api/games?details=true&prefix=group20`, 'GET').then(function (response) {
        _gameId = response;
        console.log(_gameId);
        console.log("Item:");
        console.log(_gameId[0].playerCount);


        while (_gameId.length > 12){
            _gameId.pop();
        }

        for (let i = 0; i < _gameId.length; i++) {
            document.querySelector('main figure:nth-child(' + (i+1) + ')').innerHTML =
                `<img src="../assets/media/icons/toweractive.png" alt="Tower" title="tower" class="active" id="id${i}">`
        }
    })
}

// let playerName = localStorage.getItem('playername');
//
// function joinGame() {
//     console.log("Gooffof");
//     console.log(playerName);
//     console.log(_gameId[0]);
//
//     fetchFromServer(`${config.root}games/${_gameId[0]}/players`, 'POST', {playerName: `${playerName}`}).then(function(response){
//         _playerToken = response;
//         console.log(_playerToken);
//         // window.location.href = "game-lobby.html";
//     })
// }
//
