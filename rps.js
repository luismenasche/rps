const playArray = ["\u{1F44A}", "\u270B", "\u270C\uFE0F"];

const score = document.querySelector(".score");
const pv = document.querySelector(".score__ppoints");
const cv = document.querySelector(".score__cpoints");
const res = document.querySelector(".score__result");
const selector = document.querySelector(".selector");
const choices = document.querySelectorAll(".choice");
for (let c of choices) {
    c.addEventListener("click", playRound);
}
const roundNumber = document.querySelector(".round-number");
const rounds = document.querySelector(".rounds");
const table = document.querySelector(".rounds__table");

let roundCounter = 1;

function playRound(ev) {
    ev.stopPropagation();
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = `#${roundCounter}`;
    tr.appendChild(td);
    let playerSelection = Number(ev.currentTarget.getAttribute("data-play"));
    td = document.createElement("td");
    td.textContent = playArray[playerSelection];
    tr.appendChild(td);
    let computerSelection = Math.floor(Math.random() * 3);
    td = document.createElement("td");
    td.textContent = playArray[computerSelection];
    tr.appendChild(td);
    td = document.createElement("td");
    if (playerSelection == computerSelection)
        td.textContent = "Draw";    
    else if (((playerSelection == 0) && (computerSelection == 2)) || 
        (playerSelection == 1) && (computerSelection == 0) ||
        (playerSelection == 2) && (computerSelection == 1)) {
            increase(pv);
            td.textContent = "The Player won this round";
    }
    else {
        increase(cv);
        td.textContent = "The Computer won this round"
    }
    tr.appendChild(td);
    table.appendChild(tr);
    tr.scrollIntoView();
    roundCounter++;
    roundNumber.textContent = String(roundCounter);
    if (roundCounter == 2)
        rounds.style.visibility = "visible";
}

function increase(value) {
    let newValue = Number(value.textContent) + 1;
    value.textContent = String(newValue);
    if (newValue == 5) {
        for (let c of choices) {
            c.removeEventListener("click", playRound);
        }
        res.style.color = "green";
        if (value.classList.contains("score__ppoints")) {
            res.innerHTML = "The Player WON!!!<br>(Click to play again)";
        }
        else {
            res.innerHTML = "The Computer WON!!!<br>(Click to play again)";
        }
        selector.style.display = "none";
        score.style.width = "100%";
        document.body.addEventListener("click", reset, {once: true});
    }
}

function reset() {
    window.location.reload();
}