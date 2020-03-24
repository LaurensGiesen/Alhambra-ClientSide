"use strict";

let _gameId = localStorage.getItem("gameId");
let _playername = localStorage.getItem("playername");
let _playerToken = localStorage.getItem("playerToken");

function fetchFromServer(url, httpVerb, requestBody){
    let options= {};
    options.method = httpVerb;

    options.headers = {};
    options.headers["Content-Type"] = "application/json";
    options.headers["Authorization"] = "Bearer " + _playerToken;

    // Don't forget to add data to the body when needed
    options.body = JSON.stringify(requestBody);

    // Authorization header
    options.headers["Authorization"] = "Bearer " + _playerToken;

    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                console.error('%c%s','background-color: red;color: white','! An error occurred while calling the API');
                console.table(response);
            }
            return response.json();
        })
        .then((jsonresponseyouarelookingfor) => {
            return jsonresponseyouarelookingfor
        })
}