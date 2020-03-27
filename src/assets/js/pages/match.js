"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    loadTowers();
    document.querySelector("#popup h2").addEventListener("click", closePopup);
    document.querySelector("#popup input[type=submit]").addEventListener('click', clickToJoinGame);
    document.querySelector("#friendCode input[type=submit").addEventListener('click', clickFriendCode);
}

function loadTowers() {
    const main = document.querySelector('main');
    main.innerHTML = "";

    getNumberOfGames(config.towersOnMap, function(response){
        let i = 0;
        while(i < response.length){
            main.innerHTML += getHTMLofTower(response[i].id, true);
            i++;
        }
        while(i < config.towersOnMap){
            main.innerHTML += getHTMLofTower(0, false);
            i++;
        }

        document.querySelectorAll("main figure").forEach((element) => {
            element.addEventListener('click', openPopup);});
    });
}

function openPopup(e) {
    e.preventDefault();
    const gameId = e.target.dataset.gameid;

    const popUp = document.querySelector("#popup");
    const gameIdElement = popUp.querySelector("h3");
    const playerCountElement = popUp.querySelector("p");
    const submitButton = popUp.querySelector("input[type=submit]");

    if(gameId === "0"){
        gameIdElement.innerHTML = "Empty game";
        playerCountElement.innerHTML = `0/${config.maxNumberOfParticipants}`;
        submitButton.value = "Create";
        popUp.style.display = "flex";
    } else {
        getNumberOfPlayers(gameId, function(playerCount){
            gameIdElement.innerHTML = gameId;
            playerCountElement.innerHTML = `${playerCount}/${config.maxNumberOfParticipants}`;
            submitButton.value = "Join";
            popUp.style.display = "flex";
        });
    }
}

function closePopup(){
    const popup = document.querySelector("#popup");
    popup.style.display = "none";
}

function clickToJoinGame(e){
    e.preventDefault();
    const gameId = document.querySelector("#popup h3").innerHTML;

    if(gameId === "Empty game"){
        createGame(function(response){
            joinGame(response, function(){
                window.location.href = "gamelobby.html";
            })
        });
    } else {
        joinGame(gameId, function(){
            window.location.href = "gamelobby.html";
        });
    }
}

function clickFriendCode(e){
    e.preventDefault();
    const gameId = document.querySelector("#friend").value;

    joinGame(gameId, function(){
        window.location.href = "gamelobby.html";
    });
}

function getHTMLofTower(gameId, active){
    if(active){
        return `<figure>
                <img src="../assets/media/icons/tower-active.png" alt="Active Tower" title="Active Tower" data-gameid="${gameId}">
            </figure>`;
    } else {
        return `<figure>
                <img src="../assets/media/icons/tower-deactive.png" alt="Deactive Tower" title="Deactive Tower" data-gameid="0">
            </figure>`;
    }
}
