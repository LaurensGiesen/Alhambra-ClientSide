"use strict";

function goToLeaderboard() {
    setTimeout(goToLeaderboard, config.pollingTime);
    if(_gameAuth.ended === true ){
        window.location.href = "leaderboard.html";
    }
}
