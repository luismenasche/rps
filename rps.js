const playArray = ["rock", "paper", "scissors"];

const pv = document.querySelector(".info__pvalue");
const cv = document.querySelector(".info__cvalue");
const res = document.querySelector(".info__result");

const choices = document.querySelectorAll(".choice");
for (let c of choices) {
    c.addEventListener("click", playRound);
}

function playRound(ev) {
    let playerSelection = Number(ev.currentTarget.getAttribute("data-play"));
    let computerSelection = Math.floor(Math.random() * 3);
    let newValue, winner;
    if (playerSelection == computerSelection)
        return;
    else if (playerSelection + computerSelection == 2) {
        if (playerSelection == 0) {
            winner = 0;
            newValue = increase(pv);
        }
        else {
            winner = 1;
            newValue = increase(cv);
        }
    }
    else if (playerSelection - computerSelection > 0) {
        winner = 0;
        newValue = increase(pv);
    }
    else {
        winner = 1;
        newValue = increase(cv);
    }
    if (newValue == 5) {
        for (let c of choices) {
            c.removeEventListener("click", playRound);
        }
        res.style.color = "green";
        if (winner == 0) {
            res.textContent = "The Player WON!!!";
        }
        else {
            res.textContent = "The Computer WON!!!";
        }
    }
}

function increase(value) {
    let newValue = Number(value.textContent) + 1;
    value.textContent = String(newValue);
    return newValue;
}

/*function game() {
    let psText, ps, cs, r;
    let pg = 0;
    let cg = 0;
    for (let i = 0; i < 5; i++) {
        psText = prompt("What is your play?");
        psText = psText.toLowerCase();
        ps = playArray.indexOf(psText);
        cs = computerPlay();
        console.log(`Game ${i+1}: ${psText} / ${playArray[cs]}`);
        r = playRound(ps, cs);
        if (r == 1)
            pg++;
        else if (r == -1)
            cg++;
    }
    console.log(`The player won ${pg} games`);
    console.log(`The computer won ${cg} games`);
    if (pg > cg)
        console.log("The player won!");
    else if (cg > pg)
        console.log("The computer won!");
    else
        console.log("It ended in a draw!");
}

game();*/