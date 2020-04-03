'use strict';

function loadPublicMarket(){
    const isActivePlayer = isPlayerActive(_playerName);
    if(!isActivePlayer){
        setTimeout(loadPublicMarket, 1000);
    }

    loadTileInMarket("blue");
    loadTileInMarket("green");
    loadTileInMarket("orange");
    loadTileInMarket("yellow");

}

function loadTileInMarket(color){
    let market;
    switch(color){
        case "blue":
            market = _gameAuth.market.blue;
            break;
        case "green":
            market = _gameAuth.market.green;
            break;
        case "orange":
            market = _gameAuth.market.orange;
            break;
        default: //yellow
            market = _gameAuth.market.yellow;
            break;
    }
    document.querySelector(`#${color}market`).innerHTML = `
          <article class="tile ${market.type}" data-type="${market.type}" data-cost="${market.cost}" data-walls="sw">
                <img src="../assets/media/icons/${market.type}.png" alt="${market.type}">
                <h4>${market.cost}</h4>
            </article>`;
}
