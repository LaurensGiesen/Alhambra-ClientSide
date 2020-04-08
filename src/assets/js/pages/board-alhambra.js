"use strict";

function scrollToFountain() {
    document.querySelector(".row0").scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}

function shortcutsAlhambra(e){
    const alh = document.querySelector("#alhambra");
    const tileHeight = document.querySelector(".row0").clientHeight;

    switch(e.keyCode){
        case 37: //ArrowLeft
            alh.scrollBy(tileHeight*-1,0);
            break;
        case 38: //ArrowUp
            alh.scrollBy(0, tileHeight*-1);
            break;
        case 39: //ArrowRight
            alh.scrollBy(parseInt(tileHeight),0);
            break;
        case 40: //ArrowDown
            alh.scrollBy(0,parseInt(tileHeight));
            break;
        default:
            break;
    }
}

function loadAlhambra(){
    const alhambra = getAlhambra(_playerName);
    const locationFountain = getLocationFountain(alhambra);
    const board = document.querySelector("#alhambra");

    let boardSectionHTML = "";
    for(let row = 0; row < alhambra.length; row++ ){
        for(let col = 0; col < alhambra[row].length; col++ ){
            const boardrow = row - locationFountain.row;
            const boardcol = col - locationFountain.col;
            boardSectionHTML += `<section class="row${boardrow} col${boardcol}" data-row="${boardrow}" data-col="${boardcol}">`;
            if(alhambra[row][col] != null){
                boardSectionHTML += getHTMLTile(alhambra[row][col]);
            }
            boardSectionHTML += `</section>`;
        }
    }
    boardSectionHTML += `
        <section class="row9 col9" data-row="9" data-col="9">
        </section>`;
    board.innerHTML = boardSectionHTML;
}

function getHTMLTile(building){
    if(building.type != null){
        let wallClass= "";
        let wallData= "";
        if(building.walls.north){wallClass+="wallNorth"; wallData+="n";}
        if(building.walls.east){wallClass+="wallEast"; wallData+="e";}
        if(building.walls.south){wallClass+="wallSouth"; wallData+="s";}
        if(building.walls.west){wallClass+="wallWest"; wallData+="w";}

        return `<article class="tile ${building.type} ${wallClass}" data-type="${building.type}" data-cost="${building.cost}" data-walls="${wallData}">
            <img src="../assets/media/icons/${building.type}.png" alt="${building.type}">
            <h4>${building.cost}</h4>
            </article>`;
    } else {
        return `<article class="tile fountain" data-type="fountain">
            <img src="../assets/media/icons/fountain.png" alt="fountain">
            <h4>fountain</h4>
            </article>`;
    }
}

function makeAlhambraDroppable(e){
    const w = e.target.dataset.walls;
    const walls = {
        "north": w.includes("n"),
        "east": w.includes("e"),
        "south": w.includes("s"),
        "west": w.includes("w")
    };
    getAvailableLocations(walls, function(response){
        for(let loc of response){
            addEmptyTileToAlhambra(loc);
        }
        document.querySelectorAll("#alhambra .emptyTile").forEach(
            tile => {
                tile.addEventListener("dragover", dragoverTile);
                tile.addEventListener("drop", dropAlhambra);
            }
        );
    });
}

function dropAlhambra(e){
    const dropLocation = e.target.closest("section");
    const dropRow = dropLocation.dataset.row;
    const dropCol = dropLocation.dataset.col;

    
    console.log(dropRow + " " + dropCol);
}

function addEmptyTileToAlhambra(location){
    const board = document.querySelector("#alhambra");
    board.innerHTML += `
            <section class="row${location.row} col${location.col}" data-row="${location.row}" data-col="${location.col}">
                <h3>Boardarea</h3>
                <article class="emptyTile">
                    <h4>Empty tile</h4>
                </article>
            </section>`;
}

function makeAlhambraUndroppable(){
    const emptyTiles = document.querySelectorAll("#alhambra .emptyTile");
    for(const emptyTile of emptyTiles){
        emptyTile.closest("section").remove();
    }
}


