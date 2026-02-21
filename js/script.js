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