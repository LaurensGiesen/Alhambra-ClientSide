"use strict";
const playerScoreBook = [];

function makeScoreBook() {

    for (let i = 0; i < _gameAuth.players.length; i++){
        const playerScore  = {playerName: _gameAuth.players[i].name, score: _gameAuth.players[i].score };
        playerScoreBook.push(playerScore);
    }
    const playerStatics = playerScoreBook.sort(compare);
    while (playerStatics.length < 3){
        playerStatics.push({playerName: "", score: ""});
    }
    loadPodium(playerStatics);
}

function compare(a,b) {
    if(a.score > b.score){
        return -1;
    }
    if(a.score < b.score){
        return 1;
    }
    return 0;
}

function loadPodium(playerStatics) {
    const podium = document.querySelector("#podium");

    for (let i = 0; i < 3; i++){
        podium.innerHTML += `
            <article>
                <h3>${i+1}</h3>
                <h2>${playerStatics[i].playerName}</h2>
                <p>${playerStatics[i].score}</p>
            </article>
        `;
    }
    if (playerStatics.length  > 3 ){
        loadList(playerStatics);
    }
}

function loadList(playerStatics) {
    const list = document.querySelector("#list");
    for (let i =  3; i <= playerStatics.length - 1 ; i++) {
        list.innerHTML +=
            `<article>
                <h3>${i + 1}</h3>
                <h2>${playerStatics[i].playerName}</h2>
                <p>${playerStatics[i].score}</p>
            </article>`;
    }
}
