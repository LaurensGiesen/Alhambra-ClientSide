"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    pollGameAuth(function(){
        makeScoreBook();
    });
}