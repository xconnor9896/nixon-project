"use strict";


// ON PAGE LOAD EVENT

window.onload = (event) => {
    alert("Welcome. Please vote.")
}


// MOUSEMOVE EVENT

/*

code would go here but im 
a little lazy, still WIP

*/


// ONCLICK EVENT


mcGovern.addEventListener("click", susTakeover)
mcGovern.addEventListener("click", susRetention);

function susRetention() {
    nixon.src = "media/sus.png";
}

let div = document.getElementById("susGrid");

function createImage() {
    div.innerHTML += ` <img class="susIMG" src="media/susBG.png" alt="SUS!!!">`;
}

function susTakeover() {
    for(let i = 0; i < 45; i++) {
        setTimeout(createImage, i * 100);
    }
    mcGovern.removeEventListener("click", susTakeover);
}


// CONTEXT MENU EVENT


window.addEventListener("contextmenu", warnVote);

function warnVote() {
    alert("Hey, you won't find anything here! Just vote!");
}


// MOUSEOVER / MOUSELEAVE EVENT


function mcGovernHover() {
    nixon.src = "media/sus.png";
}

mcGovern.addEventListener("mouseover", mcGovernHover);

function mcGovernLeave() {
    nixon.src = "media/notSus.png";
}

mcGovern.addEventListener("mouseleave", mcGovernLeave);


// MOVING OBJECT WITH clientX AND clientY

/*

code would go here but im
a little lazy, still WIP

*/


/* I'm going to remove event listeners in their
respective code blocks */


// CUSTOM CURSOR