function setSizes() {
    const main = document.querySelector(".main");
    const rounds = document.querySelector(".rounds");
    rounds.style.height = 
        String(window.innerHeight - main.offsetHeight) + "px";
}

const playArray = ["\u{1F44A}", "\u270B", "\u270C\uFE0F"];

function playRound(ev) {
    ev.stopPropagation();
    let tr = document.getElementById("currentRow");
    let playerSelection = Number(ev.currentTarget.getAttribute("data-play"));
    let td = document.createElement("td");
    td.textContent = playArray[playerSelection];
    tr.appendChild(td);
    let computerSelection = Math.floor(Math.random() * 3);
    td = document.createElement("td");
    td.textContent = playArray[computerSelection];
    tr.appendChild(td);
    td = document.createElement("td");
    let quit;
    if (playerSelection == computerSelection)
        td.textContent = "Draw";    
    else if (((playerSelection == 0) && (computerSelection == 2)) || 
        (playerSelection == 1) && (computerSelection == 0) ||
        (playerSelection == 2) && (computerSelection == 1)) {
            quit = increase(pv);
            td.textContent = "The Player won this round";
    }
    else {
        quit = increase(cv);
        td.textContent = "The Computer won this round"
    }
    tr.appendChild(td);
    if (quit)
        return;
    roundCounter++;
    roundNumber.textContent = String(roundCounter);
    tr.removeAttribute("id");
    tr = document.createElement("tr");
    tr.id = "currentRow";
    td = document.createElement("td");
    td.textContent = `#${roundCounter}`;
    tr.appendChild(td);
    table.appendChild(tr);
    tr.scrollIntoView();
}

function increase(value) {
    let newValue = Number(value.textContent) + 1;
    value.textContent = String(newValue);
    if (newValue == 5) {
        for (let c of choices) {
            c.removeEventListener("click", playRound);
            c.style.opacity = "0.3";
            c.classList.remove("choice-hover");
        }
        res.style.color = "hsl(120,100%,75%)";
        if (value.classList.contains("score__ppoints")) {
            res.textContent = "The Player WON!!!";
        }
        else {
            res.textContent = "The Computer WON!!!";
        }
        subtitle.textContent = "Click anywhere to play again";
        subtitle.style.fontWeight = "bold";
        document.body.addEventListener("click", reset, {once: true});
        return 1;
    }
    return 0;
}

function reset() {
    window.location.reload();
}

window.addEventListener("load", setSizes);
window.addEventListener("resize", setSizes);

const pv = document.querySelector(".score__ppoints");
const cv = document.querySelector(".score__cpoints");
const res = document.querySelector(".score__result");
const subtitle = document.querySelector(".subtitle");
const choices = document.querySelectorAll(".choice");
for (let c of choices) {
    c.addEventListener("click", playRound);
}

const roundNumber = document.querySelector(".round-number");
const table = document.querySelector(".rounds__table");

let roundCounter = 1;