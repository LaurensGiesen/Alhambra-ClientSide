"use strict";


function loadBanks(){
    const isActivePlayer = isPlayerActive(_playerName);
    loadPersonalBank();
    loadPublicBank();
    if(!isActivePlayer){
        setTimeout(loadBanks, config.pollingTime);
    } else {
        makeMoneyClickable();
        document.querySelector("#actions #money").addEventListener('click', clickTakeMoney);
    }
}


function loadPersonalBank(){
    const player = getPlayer(_playerName);

    const bluestack = document.querySelector("#bluestack");
    const greenstack = document.querySelector("#greenstack");
    const orangestack = document.querySelector("#orangestack");
    const yellowstack = document.querySelector("#yellowstack");

    bluestack.innerHTML = "";
    greenstack.innerHTML = "";
    orangestack.innerHTML = "";
    yellowstack.innerHTML = "";

    for(const coin of player.money){
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

}
function loadPublicBank(){
    let publicBankHTML = "<h2>Public bank</h2>";

    for(const coin of _gameAuth.bank){
        publicBankHTML += getCoinHTML(coin);
    }
    document.querySelector("#publicbank").innerHTML = publicBankHTML;
}

function makeMoneyClickable(){
    document.querySelectorAll(".money").forEach(money => {
        money.addEventListener("click", selectMoney);
    });
}


function getCoinHTML(coin){
    return `<article class="money ${coin.currency}money" data-currency="${coin.currency}" data-amount="${coin.amount}" data-selected="false">
                <h4>${coin.amount}</h4>
                <h4>${coin.amount}</h4>
            </article>`;
}

function selectMoney(e){
    e.preventDefault();
    if(e.target.dataset.selected === "true"){
        e.target.dataset.selected = "false";
    } else {
        e.target.dataset.selected = "true";
    }

}

function clickTakeMoney(e){
    e.preventDefault();
    const selectedCoins = document.querySelectorAll("#publicbank .money[data-selected=true]");
    const coinArray = [];

    if (selectedCoins.length === 0) {
        window.alert("You have to select some money first !");
    } else {
        for(const coin of selectedCoins){
            const currency = coin.dataset.currency;
            const amount = coin.dataset.amount;
            coinArray.push({"currency": currency, "amount": amount});
        }
        takeMoney(coinArray, function(){
            switchTurn();
        });
    }
}




