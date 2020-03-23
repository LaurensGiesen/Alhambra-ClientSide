"use strict";

let _games = null;

document.addEventListener('DOMContentLoaded',init);

function init() {
    console.log("Ho maat de pagina laad gwne");
    inladen();
    joinedPlayers();
}

function inladen() {

    console.log("ej");

    let playerName = localStorage.getItem('playername');
    console.log(playerName);
    document.querySelector("section.twee").innerHTML +=
        `<div class="notReady">
            <h3>${playerName}</h3>
            <h4>Not Ready</h4>
        </div>`
}

function joinedPlayers() {

    let playerToken = localStorage.getItem('playerToken');

    console.log(playerToken);

    let split1 = playerToken.split('+');

    console.log(split1[0]);

    fetchFromServer(`${config.root}games?details=true&prefix=group${config.groupnumber}`, 'GET').then(function (response) {
        _games = response;

        console.log(_games);

        for (let i = 0; i < _games.length; i++){
            if (_games[i].id === split1[0]) {
                let aantal = _games[i].playerCount;
                console.log(aantal);
                document.querySelector("div.eerst").innerHTML +=
                    `<p>${aantal}/6</p>`;
            }
        }
    });
}