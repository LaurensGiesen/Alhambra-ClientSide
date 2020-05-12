'use strict';

function loadPublicMarket(){
    loadTileInMarket("blue");
    loadTileInMarket("green");
    loadTileInMarket("orange");
    loadTileInMarket("yellow");

    const isActivePlayer = isPlayerActive(_playerName);
    if(!isActivePlayer){
        setTimeout(loadPublicMarket, config.pollingTime);
    } else {
        makeMarketTilesDraggable();
    }
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

    if(market != null){
        let walls = "";
        let wallsClass = "";
        if(market.walls.walls.north){
            walls += "n";
            wallsClass += "wallNorth ";
        }
        if(market.walls.walls.east){
            walls += "e";
            wallsClass += "wallEast ";
        }
        if(market.walls.walls.south){
            walls += "s";
            wallsClass += "wallSouth ";
        }
        if(market.walls.walls.west){
            walls += "w";
            wallsClass += "wallWest ";
        }

        document.querySelector(`#${color}market`).innerHTML = `
          <article class="tile ${market.type} ${wallsClass}" data-type="${market.type}" data-cost="${market.cost}" data-walls="${walls}">
                <img src="../assets/media/icons/${market.type}.png" alt="${market.type}" draggable="false">
                <h4>${market.cost}</h4>
            </article>`;
    }

}


