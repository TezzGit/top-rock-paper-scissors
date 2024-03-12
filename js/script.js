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
    let result = ""
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'Rock') {
                result = "Tie - Rock vs Rock"
            } else if (computerSelection === 'Scissors') {
                result = "You Win! Rock beats Scissors"
            } else {
                result = "You Lose! Paper beats Rock"
            }
        case 'scissors':
            if (computerSelection === 'Rock') {
                result = "You Lose! Rock beats Scissors"
            } else if (computerSelection === 'Scissors') {
                result = "Tie - Scissors vs Scissors"
            } else {
                result = "You Win! Scissors beats Paper"
            }
        case 'paper':
            if (computerSelection === 'Rock') {
                result = "You Win! Paper beats Rock"
            } else if (computerSelection === 'Scissors') {
                result = "You Lose! Scissors beats Paper"
            } else {
                result = "Tie - Paper vs Paper"
            }
    }
    return result;
}

function playGame() {
    let roundResult = "";
    for (let i = 0; i < 5; i++) {
        let userPrompt = prompt("Rock, Paper, Scissors? ")
        let computer = getComputerChoice()
        roundResult = gameRound(userPrompt.toLowerCase(), computer)
        console.log(roundResult);
    }
}

playGame();