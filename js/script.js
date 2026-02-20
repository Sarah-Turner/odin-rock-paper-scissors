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
    const result = document.createElement("p");
    const scoreBox = document.querySelector(".scoreBox");
    if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats Rock!";
        scoreBox.appendChild(result);
        console.log("You lose! Paper beats Rock!");
        outcome = -1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! Rock beats Scissors!";
        scoreBox.appendChild(result);
        console.log("You win! Rock beats Scissors!");
        outcome = 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beats Paper!";
        scoreBox.appendChild(result);
        console.log("You lose! Scissors beats Paper!");
        outcome = -1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats Rock!";
        scoreBox.appendChild(result);
        console.log("You win! Paper beats Rock!");
        outcome = 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats Scissors!";
        scoreBox.appendChild(result);
        console.log("You lose! Rock beats Scissors!");
        outcome = -1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! Scissors beats Paper!";
        scoreBox.appendChild(result);
        console.log("You win! Scissors beats Paper!");
        outcome = 1;
    } else {
        result.textContent = "Tie!";
        scoreBox.appendChild(result);
        console.log("Tie!");
    }
    return outcome;
}

function pressRock(event) {
    let outcome = playRound("rock", getComputerChoice());
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

function pressPaper(event) {
    let outcome = playRound("paper", getComputerChoice());
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

function pressScissors(event) {
    let outcome = playRound("scissors", getComputerChoice());
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
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    
    rockBtn.addEventListener("click", pressRock);
    paperBtn.addEventListener("click", pressPaper);
    scissorsBtn.addEventListener("click", pressScissors);
}

playGame();