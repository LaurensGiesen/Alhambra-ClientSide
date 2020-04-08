"use strict";
let playerScoreBook = [{name: 'ik', score:5}];

function makeScoreBook() {

    for (let i = 0; i < _gameAuth.players.length; i++){
        let playerScore  = {name: _gameAuth.players[i].name, score: _gameAuth.players[i].score };
        playerScoreBook.push(playerScore);
    }
    let playerStatics = playerScoreBook.sort(compare);
    loadPodium(playerStatics);
}

function compare(a,b) {
    if(a.score > b.score){
        return -1;
    }if(a.score < b.score){
        return 1;
    }
    return 0;
}

function loadPodium(playerStatics) {
    let podium = document.querySelector("#podium");
    for (let i = 0; i < 3; i++){
        podium.innerHTML += `
            <article>
                <h3>${i+1}</h3>
                <h2>${playerStatics[i].name}</h2>
                <p>${playerStatics[i].score}</p>
            </article>
        `
    }
    if (playerStatics.length > 4){
        loadList(playerStatics);
    }
}

function loadList(playerStatics) {
    let list = document.querySelector("#list");
    for (let i = 0; i < 3; i++) {
        list.innerHTML += `
            <article>
                <h3>${i + 4}</h3>
                <h2>${playerStatics[i + 4].name}</h2>
                <p>${playerStatics[i + 4].score}</p>
            </article>
        `
    }
}
