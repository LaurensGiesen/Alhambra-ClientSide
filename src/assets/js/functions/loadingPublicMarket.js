'use strict';

function pollMarket(){
    setTimeout(pollPlayers, 1000);

    getJoinedGame(function(game){
        loadBlueMarket(game);
        loadGreenMarket(game);
        loadOrangeMarket(game);
        loadYellowMarket(game);
    });
}
function loadBlueMarket(game) {
    console.log(game.market);
    document.querySelector("#bluemarket").innerHTML = `
          <article class="tile pavilion" data-type="${game.market.blue.type}" data-cost="${game.market.blue.cost}" data-walls="sw">
                <img src="../assets/media/icons/${game.market.blue.type}.png" alt="chamber">
                <h4>${game.market.blue.cost}</h4>
            </article>
    `
}
function loadGreenMarket(game) {
    console.log(game.market);
    document.querySelector("#greenmarket").innerHTML = `
          <article class="tile garden" data-type="${game.market.green.type}" data-cost="${game.market.green.cost}" data-walls="sw">
                <img src="../assets/media/icons/${game.market.green.type}.png" alt="chamber">
                <h4>${game.market.green.cost}</h4>
            </article>
    `
}
function loadOrangeMarket(game) {
    console.log(game.market);
    document.querySelector("#orangemarket").innerHTML = `
          <article class="tile arcade" data-type="${game.market.orange.type}" data-cost="${game.market.orange.cost}" data-walls="sw">
                <img src="../assets/media/icons/${game.market.orange.type}.png" alt="chamber">
                <h4>${game.market.orange.cost}</h4>
            </article>
    `
}
function loadYellowMarket(game) {
    console.log(game.market);
    document.querySelector("#yellowmarket").innerHTML = `
          <article class="tile chamber" data-type="${game.market.yellow.type}" data-cost="${game.market.yellow.cost}" data-walls="sw">
                <img src="../assets/media/icons/${game.market.yellow.type}.png" alt="chamber">
                <h4>${game.market.yellow.cost}</h4>
            </article>
    `
}



