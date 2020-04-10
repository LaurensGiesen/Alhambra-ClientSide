"use strict";

function makeReserveTilesDraggable(){
    document.querySelectorAll("#personalreserve .tile").forEach(tile => {
        tile.setAttribute("draggable", true);
        tile.addEventListener("dragstart", dragstartReserveTile);
        tile.addEventListener("dragend", dragendTile);
    });
}

function makeAlhambraTilesDraggable(){
    document.querySelectorAll("#alhambra .tile").forEach(tile => {
        if(!tile.className.includes("fountain")) {
            tile.setAttribute("draggable", true);
        }
        tile.addEventListener("dragstart", dragstartAlhambraTile);
        tile.addEventListener("dragend", dragendTile);
    });
}

function makeMarketTilesDraggable(){
    document.querySelectorAll("#publicmarket .tile").forEach(tile => {
        tile.setAttribute("draggable", true);
        tile.addEventListener("dragstart", dragstartMarketTile);
        tile.addEventListener("dragend", dragendTile);
    });
}

function dragstartReserveTile(e){
    e.dataTransfer.setData("origin", "reserve");
    e.dataTransfer.setData("type", e.target.dataset.type);
    e.dataTransfer.setData("cost", e.target.dataset.cost);
    e.dataTransfer.setData("walls", e.target.dataset.walls);

    makeDroppableAlhambraEmptyTile(e, function(){
        makeDroppableAlhambraTile(e);
    });

}

function dragstartAlhambraTile(e){
    e.dataTransfer.setData("origin", "alhambra");
    e.dataTransfer.setData("row", e.target.parentElement.dataset.row);
    e.dataTransfer.setData("col", e.target.parentElement.dataset.col);

    makeDroppableReserve(e);
}

function dragstartMarketTile(e){
    e.dataTransfer.setData("origin", "market");
    e.dataTransfer.setData("currency", e.target.parentElement.dataset.currency);
    e.dataTransfer.setData("type", e.target.dataset.type);
    e.dataTransfer.setData("cost", e.target.dataset.cost);
    e.dataTransfer.setData("walls", e.target.dataset.walls);

    makeDroppableAlhambraEmptyTile(e);
    makeDroppableReserve(e);
}

function dragendTile(){
    makeUndroppable();
}

function makeDroppableAlhambraTile(){
    document.querySelectorAll("#alhambra .tile").forEach(
        tile => {
            tile.addEventListener("dragover", dragoverTile);
            tile.addEventListener("drop", dropAlhambra);
        }
    );

}

function makeDroppableAlhambraEmptyTile(e, callback){
    const w = e.target.dataset.walls;
    const walls = {
        "north": w.includes("n"),
        "east": w.includes("e"),
        "south": w.includes("s"),
        "west": w.includes("w")
    };
    getAvailableLocations(walls, function (response) {
        for (const location of response) {
            addEmptyTileToAlhambra(location);
        }
        document.querySelectorAll("#alhambra .emptyTile").forEach(
            tile => {
                tile.addEventListener("dragover", dragoverTile);
                tile.addEventListener("drop", dropAlhambra);
            }
        );
        if(callback){
            callback();
        }
    });

}

function makeDroppableReserve(){
    const reserve = document.querySelector("#personalreserve");
    reserve.addEventListener("dragover", dragoverTile);
    reserve.addEventListener("drop", dropReserve);
}

function makeUndroppable(){
    const alhambraEmptyTiles = document.querySelectorAll("#alhambra .emptyTile");
    alhambraEmptyTiles.forEach(tile => {tile.remove();});
}

function dragoverTile(e){
    e.preventDefault();
}

function dropAlhambra(e){
    const origin = e.dataTransfer.getData("origin");

    const locationElement = e.target.closest("section");
    const location = {"row": locationElement.dataset.row, "col": locationElement.dataset.col};

    const building = getBuildingFromDataTransfer(e);

    if(origin === "market"){
        const currency = e.dataTransfer.getData("currency");
        const coins = getSelectedCoins();

        buyBuilding(currency, coins, function () {
            placeBuildingOnAlhambra(building, location, switchTurn);
        });
    } else if(origin === "reserve") {
        patchBuildingOnAlhambra(building, location, switchTurn);
    }
}

function dropReserve(e){

    const origin = e.dataTransfer.getData("origin");
    const building = getBuildingFromDataTransfer(e);

    if(origin === "market"){
        const currency = e.dataTransfer.getData("currency");
        const coins = getSelectedCoins();

        buyBuilding(currency, coins, function () {
            placeBuildingInReserve(building, switchTurn);
        });
    } else if(origin === "alhambra") {
        const location = {"row": e.dataTransfer.getData("row"), "col": e.dataTransfer.getData("col")};
        removeBuildingFromAlhambra(location, switchTurn);
    }
}

function getBuildingFromDataTransfer(e){
    return {
        "type": e.dataTransfer.getData("type"),
        "cost": e.dataTransfer.getData("cost"),
        "walls": {
            "north": e.dataTransfer.getData("walls").includes("n"),
            "east": e.dataTransfer.getData("walls").includes("e"),
            "south": e.dataTransfer.getData("walls").includes("s"),
            "west": e.dataTransfer.getData("walls").includes("w")
        }
    };
}

function getSelectedCoins(){
    const coinElements = document.querySelectorAll("#personalbank .money[data-selected=true]");
    const selectedCoins = [];
    for (const coin of coinElements) {
        selectedCoins.push({"currency": coin.dataset.currency, "amount": coin.dataset.amount});
    }
    return selectedCoins;
}