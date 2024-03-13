const options = {
    1: "Rock",
    2: "Scissors",
    3: "Paper"
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return options[choice];
}

function gameRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'Rock') {
                return 0;
            } else if (computerSelection === 'Scissors') {
                return 1;
            } else {
                return -1;
            }
        case 'scissors':
            if (computerSelection === 'Rock') {
                return -1;
            } else if (computerSelection === 'Scissors') {
                return 0;
            } else {
                return 1;
            }
        case 'paper':
            if (computerSelection === 'Rock') {
                return 1;
            } else if (computerSelection === 'Scissors') {
                return -1;
            } else {
                return 0;
            }
    }
    return 0;
}

function playGame() {
    let roundResult = "";
    let userPrompt = prompt("Rock, Paper, Scissors? ")
    let computer = getComputerChoice()
    roundResult = gameRound(userPrompt.toLowerCase(), computer)
}

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

const resultDiv = document.getElementById("results")
const playerScoreDiv = document.getElementById('player-score');
const compScoreDiv = document.getElementById('comp-score');
const roundWinnerDiv = document.getElementById('round-winner');

const MAX_POINTS = 5;
let playerScore = 0;
let computerScore = 0;

const updateResults = (pChoice, cChoice, result) => {
    switch (result) {
        case 0:
            roundWinnerDiv.innerHTML = "Tie " + pChoice + " vs " + cChoice;
            break;
        case 1:
            playerScore++;
            roundWinnerDiv.innerHTML = "WIN! " + pChoice + " beats " + cChoice;
            break;
        case -1:
            computerScore++;
            roundWinnerDiv.innerHTML = "LOSE! " + cChoice + " beats " + pChoice;
    }
    playerScoreDiv.innerHTML = "PLAYER: " + playerScore;
    compScoreDiv.innerHTML = "CPU: " + computerScore;


    if (playerScore >= MAX_POINTS || computerScore >= MAX_POINTS) {
        const winner = document.createElement('div')
        winner.innerHTML = playerScore > computerScore ? "Player Wins!" : "Computer Wins!"
        resultDiv.appendChild(winner);
        const resetBtn = document.createElement('button')
        resetBtn.innerHTML = "Retry?";
        resetBtn.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;
            resultDiv.removeChild(winner);
            playerScoreDiv.innerHTML = "PLAYER: " + playerScore;
            compScoreDiv.innerHTML = "CPU: " + computerScore;
            roundWinnerDiv.innerHTML = "";
            resultDiv.removeChild(resetBtn);
        })
        resultDiv.appendChild(resetBtn);
    }
}

rockBtn.addEventListener("click", () => {
    if (playerScore >= MAX_POINTS || computerScore >= MAX_POINTS) return;
    let compChoice = getComputerChoice()
    const result = gameRound('rock', compChoice)
    updateResults('Rock', compChoice, result)
})

paperBtn.addEventListener("click", () => {
    if (playerScore >= MAX_POINTS || computerScore >= MAX_POINTS) return;
    let compChoice = getComputerChoice()
    const result = gameRound("paper", compChoice);
    updateResults('Paper', compChoice, result);
})

scissorsBtn.addEventListener("click", () => {
    if (playerScore >= MAX_POINTS || computerScore >= MAX_POINTS) return;
    let compChoice = getComputerChoice();
    const result = gameRound("paper", compChoice);
    updateResults("Scissors", compChoice, result);
})