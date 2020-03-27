"use strict";

function openOptionsPopup(e){
    e.preventDefault();
    document.querySelector("#options .popup").style.display = "flex";
    document.querySelector("#options .popup .popup-content").style.display = "block";
    document.querySelector("#options .popup .popup-warning").style.display = "none";
}

function closeOptionsPopup(e){
    e.preventDefault();
    document.querySelector("#options .popup").style.display = "none";
}

function openRules(e){
    e.preventDefault();
    window.open("rules.html", "_blank");
}

function openLeaveWarning(e){
    e.preventDefault();
    document.querySelector("#options .popup .popup-content").style.display = "none";
    document.querySelector("#options .popup .popup-warning").style.display = "flex";
}


function leaveGame(e){
    e.preventDefault();
    if(deleteSelfFromGame() === true){
        localStorage.setItem("gameId", "");
        localStorage.setItem("playerToken", "");
        window.location.href = "gamemenu.html";
    }
}
