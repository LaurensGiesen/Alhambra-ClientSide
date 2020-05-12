"use strict";
let playerScoreBook = [];

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
    if (playerStatics.length  > 3 ){
        loadList(playerStatics);
    }
    console.log(playerStatics);
}

function loadList(playerStatics) {
    let list = document.querySelector("#list");
    for (let i =  3; i <= playerStatics.length - 1 ; i++) {
        list.innerHTML +=
            `<article>
                <h3>${i + 1}</h3>
                <h2>${playerStatics[i].name}</h2>
                <p>${playerStatics[i].score}</p>
            </article>`
    }
}