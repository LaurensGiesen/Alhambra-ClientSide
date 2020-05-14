"use strict";

document.addEventListener('DOMContentLoaded',init);

const submitButton = document.querySelector("form button");

function init(){
    submitButton.addEventListener('click', cleargames);
}

function cleargames(e) {
    e.preventDefault();
    const adminToken  = document.querySelector("#secret").value;
    server(adminToken);
}

function server(adminToken) {
    fetchFromServerAdmin(`${config.root}games`, 'DELETE', adminToken).then(function (response) {
        if(response == null){
            document.querySelector('h3').innerHTML = "Games have been cleared.";
        }else{
            document.querySelector('h3').innerHTML = "Wrong code!";
        }
    });
}