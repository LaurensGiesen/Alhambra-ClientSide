"use strict";

function fetchFromServer(url, httpVerb, requestBody){
    const options= {};
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
            return jsonresponseyouarelookingfor;
        });
}

function fetchFromServerAdmin(url, httpVerb , token){
    const optionsAdmin= {};
    optionsAdmin.method = httpVerb;

    optionsAdmin.headers = {};
    optionsAdmin.headers["Content-Type"] = "application/json";
    optionsAdmin.headers["Authorization"] = "Bearer " + token;

    return fetch(url, optionsAdmin)
        .then((response) => {
            if (!response.ok) {
                console.error('%c%s','background-color: red;color: white','! An error occurred while calling the API');
                console.table(response);
            }
            return response.json();
        })
        .then((jsonresponseyouarelookingfor) => {
            return jsonresponseyouarelookingfor;
        });
}
