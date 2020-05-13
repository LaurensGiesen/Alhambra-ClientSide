"use strict";

const popUp = document.querySelector("#playerDetails .popup");
const content = document.querySelector("#playerDetails .popup .popup-content");
//const contentPlayerDetails = document.querySelector("#playerDetails .popup-content div");

function openOtherPlayerDetails(e) {
    e.preventDefault();
    popUp.style.display = 'flex';
    content.style.display = 'flex';

    
    content.innerHTML = getHTMLOtherPlayerDetails(playerName);
    // let playerName = e.target.querySelector("h3").innerHTML;
    //
    // let otherPlayer = getPlayer(playerName);
    //
    //
    //
    // contentPlayerDetails.innerHTML = `
    //     <header>
    //         <h2>PlayerName</h2>
    //     </header>
    //     <section id="otherAlhambra">
    //
    //     </section>
    //     <section id="otherBank">
    //
    //     </section>
    //     <section id="otherReserve">
    //
    //     </section>
    //
    // `;

    document.querySelectorAll("#players #otherPlayers").forEach((element) => {
        element.addEventListener("mouseleave", closePopUp);});
}

function closePopUp() {
    popUp.style.display = 'none';
    content.style.display = 'none';
}
