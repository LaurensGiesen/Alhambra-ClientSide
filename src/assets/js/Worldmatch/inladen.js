"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    inladen();
}
function inladen() {
    for (let i = 0; i < 12; i++) {
        document.querySelector('main').innerHTML +=
            `<figure>
                <img src="../assets/media/icons/towerdeactive.png" alt="Deactive Tower" title="Deactive Tower" class="deactive" id="id${i}">
            </figure>`;
    }
}