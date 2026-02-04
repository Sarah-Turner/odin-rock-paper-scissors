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
    let humanWins = null;
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        humanWins = false;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanWins = true;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        humanWins = false;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanWins = true;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        humanWins = false;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        humanWins = true;
    } else {
        console.log("Tie!");
    }
    return humanWins;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        let humanWins = playRound(humanChoice, computerChoice);
        if (humanWins !== null && humanWins) {
            humanScore++;
        } else if (humanWins !== null && !humanWins) {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("Human Wins!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!");
    } else {
        console.log("No one Wins!");
    }
}

playGame();