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

function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors: ");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let outcome = 0;
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        outcome = -1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        outcome = 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        outcome = -1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        outcome = 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        outcome = -1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        outcome = 1;
    } else {
        console.log("Tie!");
    }
    return outcome;
}

function pressRock(event) {
    let outcome = playRound("rock", getComputerChoice());
    humanScore += outcome;
    computerScore -= outcome;
}

function pressPaper(event) {
    let outcome = playRound("paper", getComputerChoice());
    humanScore += outcome;
    computerScore -= outcome;
}

function pressScissors(event) {
    let outcome = playRound("scissors", getComputerChoice());
    humanScore += outcome;
    computerScore -= outcome;
}

function playGame() {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");

    rockBtn.addEventListener("click", pressRock);
    paperBtn.addEventListener("click", pressPaper);
    scissorsBtn.addEventListener("click", pressScissors);
}

playGame();