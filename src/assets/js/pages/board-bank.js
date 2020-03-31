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

        for(const coin of player.coins){
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
                default:
                    break;
            }

        }
    });
}

function pollPublicBank(){
    setTimeout(pollPublicBank, 1000);

    let publicBankHTML = "<h2>Public bank</h2>";
    getJoinedGame(function(game){

        for(const coin of game.bank){
            publicBankHTML += getCoinHTML(coin);
        }
        document.querySelector("#publicbank").innerHTML = publicBankHTML;
    });
}

function getCoinHTML(coin){
    return `<article class="money ${coin.currency}money" data-currency="${coin.currency}" data-amount="${coin.amount}">
                <h4>${coin.amount}</h4>
                <h4>${coin.amount}</h4>
            </article>`;
}
