"use strict";

function scrollToFountain() {
    document.querySelector(".row0").scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}

function shortcutsAlhambra(e) {
    const alh = document.querySelector("#alhambra");
    const tileHeight = document.querySelector(".row0").clientHeight;

    switch (e.keyCode) {
        case 37: //ArrowLeft
            alh.scrollBy(tileHeight * -1, 0);
            break;
        case 38: //ArrowUp
            alh.scrollBy(0, tileHeight * -1);
            break;
        case 39: //ArrowRight
            alh.scrollBy(parseInt(tileHeight), 0);
            break;
        case 40: //ArrowDown
            alh.scrollBy(0, parseInt(tileHeight));
            break;
        default:
            break;
    }
}

function loadAlhambra() {

    const board = document.querySelector("#alhambra");

    board.innerHTML = alhambraHTML(_playerName);

    if(isPlayerActive(_playerName)){
        makeAlhambraTilesDraggable();
    }
}

function alhambraHTML(playerName) {
    const alhambra = getAlhambra(playerName);
    const locationFountain = getLocationFountain(alhambra);
    let boardSectionHTML = "";
    for (let row = 0; row < alhambra.length; row++) {
        for (let col = 0; col < alhambra[row].length; col++) {
            const boardrow = row - locationFountain.row;
            const boardcol = col - locationFountain.col;
            boardSectionHTML += `<section class="row${boardrow} col${boardcol}" data-row="${boardrow}" data-col="${boardcol}">`;
            if (alhambra[row][col] != null) {
                boardSectionHTML += getHTMLTile(alhambra[row][col]);
            }
            boardSectionHTML += `</section>`;
        }
    }
    boardSectionHTML += `
        <section class="row9 col9" data-row="9" data-col="9">
        </section>`;
    return boardSectionHTML;
}


function getHTMLTile(building) {
    if (building.type != null) {
        let wallClass = "";
        let wallData = "";
        if (building.walls.walls.north) {
            wallClass += "wallNorth ";
            wallData += "n";
        }
        if (building.walls.walls.east) {
            wallClass += "wallEast ";
            wallData += "e";
        }
        if (building.walls.walls.south) {
            wallClass += "wallSouth ";
            wallData += "s";
        }
        if (building.walls.walls.west) {
            wallClass += "wallWest ";
            wallData += "w";
        }

        return `<article class="tile ${building.type} ${wallClass}" data-type="${building.type}" data-cost="${building.cost}" data-walls="${wallData}">
            <img src="../assets/media/icons/${building.type}.png" alt="${building.type}" draggable="false">
            <h4>${building.cost}</h4>
            </article>`;
    } else {
        return `<article class="tile fountain" data-type="fountain">
            <img src="../assets/media/icons/fountain.png" alt="fountain" draggable="false">
            <h4>fountain</h4>
            </article>`;
    }
}


function addEmptyTileToAlhambra(location) {
    const board = document.querySelector("#alhambra");
    board.innerHTML += `
            <section class="row${location.row} col${location.col}" data-row="${location.row}" data-col="${location.col}">
                <h3>Boardarea</h3>
                <article class="emptyTile">
                    <h4>Empty tile</h4>
                </article>
            </section>`;
    makeAlhambraTilesDraggable();
}
