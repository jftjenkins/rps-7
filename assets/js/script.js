// Initialize game mode & scores
let playerScore = 0;
let computerScore = 0;

// Score needed to be reached for player or computer to win game
const WINNING_SCORE = 10;

const CHOICE_WIN_COMBINATIONS = {
    "rock": ["scissors", "fire", "sponge"],
    "paper": ["air", "rock", "water"],
    "scissors": ["air", "paper", "sponge"],
    "fire": ["scissors", "paper", "sponge"],
    "water": ["rock", "fire", "scissors"],
    "air": ["fire", "rock", "water"],
    "sponge": ["paper", "air", "water"],
};

/**
 * Updates player score and UI
 */
function increasePlayerScore() {
    playerScore++;
    updateScoreBoard();
}

/**
 * Updates computer score and UI
 */
function increaseComputerScore() {
    computerScore++;
    updateScoreBoard();
}

/**
 * Resets score board
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
}

/**
 * Updates UI
 */
function updateScoreBoard() {
    const playerScoreElement = document.getElementById("player");
    const computerScoreElement = document.getElementById("computer");

    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;
}

function generateComputerChoice() {
    const choices = Object.keys(CHOICE_WIN_COMBINATIONS);
    return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Checks if player or computer has reached score of 10.
 * Once player or computer reaches 10, resets game.
 */
function checkForWinner() {
    if (playerScore >= WINNING_SCORE) {
        alert(`You win the game! Player: ${playerScore} - Computer: ${computerScore}`);
        resetGame();
    } else if (computerScore >= WINNING_SCORE) {
        alert(`Computer wins the game! Player: ${playerScore} - Computer: ${computerScore}`);
        resetGame();
    }
}

function play(playerChoice) {
    const computerChoice = generateComputerChoice();

    if (playerChoice === computerChoice) {
        alert(
            `You chose ${playerChoice}, computer chose ${computerChoice}. It's a tie!`
        );
    } else if (CHOICE_WIN_COMBINATIONS[playerChoice].includes(computerChoice)) {
        alert(
            `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`
        );
        increasePlayerScore();
    } else {
        alert(
            `You chose ${playerChoice}, computer chose ${computerChoice}. Computer wins!`
        );
        increaseComputerScore();
    }
    checkForWinner();
}