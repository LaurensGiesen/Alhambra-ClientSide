'use strict';

function loadPublicMarket(){
    const isActivePlayer = isPlayerActive(_playerName);

    loadTileInMarket("blue");
    loadTileInMarket("green");
    loadTileInMarket("orange");
    loadTileInMarket("yellow");

    if(!isActivePlayer){
        setTimeout(loadPublicMarket, 1000);
    } else {
        makeTilesDraggable();
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
        if(market.walls.north){
            walls += "n";
            wallsClass += "wallNorth ";
        }
        if(market.walls.east){
            walls += "e";
            wallsClass += "wallEast ";
        }
        if(market.walls.south){
            walls += "s";
            wallsClass += "wallSouth ";
        }
        if(market.walls.west){
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

function makeTilesDraggable(){
    document.querySelectorAll("#publicmarket .tile").forEach(tile => {
        tile.setAttribute("draggable", true);
        tile.addEventListener("dragstart", dragstartTile);
        tile.addEventListener("dragend", dragendTile);
    });
}

function dragstartTile(e){
    e.dataTransfer.setData("currency", e.target.parentElement.dataset.currency);
    e.dataTransfer.setData("type", e.target.dataset.type);
    e.dataTransfer.setData("cost", e.target.dataset.cost);
    e.dataTransfer.setData("walls", e.target.dataset.walls);

    document.querySelector("#personalreserve").addEventListener("dragover", dragoverTile);
    document.querySelector("#personalreserve").addEventListener("drop", dropPersonalReserve);
}

function dragendTile(){
    document.querySelector("#personalreserve").removeEventListener("dragover", dragoverTile);
}
function dragoverTile(e){
    e.preventDefault();
}
function dropPersonalReserve(e){
    //get coins
    const selectedCoins = document.querySelectorAll("#personalbank .money[data-selected=true]");
    const coinArray = [];
    for(const coin of selectedCoins){
        const currency = coin.dataset.currency;
        const amount = coin.dataset.amount;
        coinArray.push({"currency": currency, "amount": amount});
    }

    // place building in reserve
    const building = {
        "type": e.dataTransfer.getData("type"),
        "cost": e.dataTransfer.getData("cost"),
        "walls": {
            "north": e.dataTransfer.getData("walls").includes("n"),
            "east":e.dataTransfer.getData("walls").includes("e"),
            "south":e.dataTransfer.getData("walls").includes("s"),
            "west":e.dataTransfer.getData("walls").includes("w"),
        }
    };

    //buy building
    buyBuilding(e.dataTransfer.getData("currency"), coinArray, function(){
        placeBuildingInReserve(building, endOfTurn);
    });
}

