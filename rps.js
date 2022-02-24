function play(ev) {
    let c = ev.currentTarget.getAttribute("data-play");
    console.log(c);
}

const choices = document.querySelectorAll(".choice");

for (let c of choices) {
    c.addEventListener("click", play);
}

/*const playArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return Math.floor(Math.random() * 3);
 }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return 0;
    else if (playerSelection + computerSelection == 2) {
        if (playerSelection == 0)
            return 1;
        else
            return -1;
    }
    else
        return playerSelection - computerSelection;
}

function game() {
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