"use strict";

function loadPersonalBank(){
    getPlayerOfJoinedGame(_playerName, function(player){
        const bluestack = document.querySelector("#bluestack");
        const greenstack = document.querySelector("#greenstack");
        const orangestack = document.querySelector("#orangestack");
        const yellowstack = document.querySelector("#yellowstack");

        bluestack.innerHTML = "";
        greenstack.innerHTML = "";
        orangestack.innerHTML = "";
        yellowstack.innerHTML = "";

        for(let coin of player.coins){
            switch(coin.currency) {
                case "blue":
                    bluestack.innerHTML += getCoinHTML(coin);
                    break;
                case "green":
                    greenstack.innerHTML += getCoinHTML(coin);
                    break;
                case "yellow":
                    yellowstack.innerHTML += getCoinHTML(coin);
                    break;
                case "orange":
                    orangestack.innerHTML += getCoinHTML(coin);
                    break;
            }

        }
    });
}

function getCoinHTML(coin){
    return `<article class="money ${coin.currency}money" data-currency="${coin.currency}" data-amount="${coin.amount}">
                <h4>${coin.amount}</h4>
                <h4>${coin.amount}</h4>
            </article>`;
}