let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch(choice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    let outcome = 0;
    const result = document.createElement("p");
    const scoreBox = document.querySelector(".scoreBox");

    if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
        scoreBox.appendChild(result);
        console.log("Tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = `You win ${humanChoice} beats ${computerChoice}!`;
        scoreBox.appendChild(result);
        outcome = 1;
    } else {
        result.textContent = `You lose ${computerChoice} beats ${humanChoice}!`;
        scoreBox.appendChild(result);
        outcome = -1;
    }

    return outcome;
}

function pressBtn(event) {
    let choice = event.target.className;
    console.log(choice);
    let outcome = playRound(choice, getComputerChoice());
    if (outcome < 0) {
        computerScore++;
    } else if (outcome > 0) {
        humanScore++;
    }
    const lastOutcome = document.querySelector(".scoreBox").lastChild;
    lastOutcome.textContent += ` Human: ${humanScore} Computer: ${computerScore}`;
    const scoreBox = document.querySelector(".scoreBox");
    const result = document.querySelector(".matchResult");
    if (humanScore == 5) {
        result.textContent += "You won the game!";
        scoreBox.appendChild(result);
    } else if (computerScore == 5) {
        result.textContent += "The computer won the game!";
    }
}

function playGame() {
    const buttons = document.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach((button) => {button.addEventListener("click", pressBtn)});
}

playGame();