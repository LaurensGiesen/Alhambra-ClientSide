"use strict";

function deleteSelfFromGame(){
    fetchFromServer(`${config.root}games/${_gameId}/players/${_playerName}`, 'DELETE', {}).then(function(response){
        return response;
    });
}