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
