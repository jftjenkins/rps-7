// Initialize game mode & scores
let playerScore = 0;
let computerScore = 0;

// Score needed to be reached for player or computer to win game
const WINNING_SCORE = 10;

// Rules for playing the game
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
 * Updates player score and score board
 */
function increasePlayerScore() {
    playerScore++;
    updateScoreBoard();
}

/**
 * Updates computer score and score board
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
    resetChoiceImages();
    // Reset the result text
    const resultText = document.getElementById("resultText");
    resultText.textContent = "Results will appear here!";
}

/**
 * Updates score board
 */
function updateScoreBoard() {
    const playerScoreElement = document.getElementById("player");
    const computerScoreElement = document.getElementById("computer");

    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;
}

/**
 * @returns random computer choice from CHOICE_WIN_COMBINATIONS
 */
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
        displayWinnerModal("Player");
        resetGame();
    } else if (computerScore >= WINNING_SCORE) {
        displayWinnerModal("Computer");
        resetGame();
    }
}

/**
 * Displays the winner modal with the given winner name.
 */
function displayWinnerModal(winner) {
    const winnerModal = document.getElementById("winnerModal");
    const winnerText = document.getElementById("winnerText");
    winnerText.textContent = `${winner} wins the game!`;
    winnerModal.style.display = "block";
}

/**
 * Closes the winner modal and resets the game.
 */
function hideWinnerModal() {
    const winnerModal = document.getElementById("winnerModal");
    winnerModal.style.display = "none";
}

/**
 * Resets choice images to default image on game reset
 */
function resetChoiceImages() {
    const playerChoiceImage = document.getElementById("playerChoiceImage");
    const computerChoiceImage = document.getElementById("computerChoiceImage");

    playerChoiceImage.src = "assets/images/default.png";
    computerChoiceImage.src = "assets/images/default.png";
}

/**
 * Handles the game logic when the player makes a choice
 */
function play(playerChoice) {
    const computerChoice = generateComputerChoice();
    const playerChoiceImage = document.getElementById("playerChoiceImage");
    const computerChoiceImage = document.getElementById("computerChoiceImage");
    const resultText = document.getElementById("resultText");

    // Set the image source for player and computer choices
    playerChoiceImage.src = `assets/images/${playerChoice}.png`;
    computerChoiceImage.src = `assets/images/${computerChoice}.png`;

    let resultMessage = "";

    if (playerChoice === computerChoice) {
        resultMessage = `You chose ${playerChoice}, computer chose ${computerChoice}. It's a tie!`;
    } else if (CHOICE_WIN_COMBINATIONS[playerChoice].includes(computerChoice)) {
        resultMessage = `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`;
        increasePlayerScore();
    } else {
        resultMessage = `You chose ${playerChoice}, computer chose ${computerChoice}. Computer wins!`;
        increaseComputerScore();
    }

    // Update the result text box
    resultText.textContent = resultMessage;

    // Check for a winner after each play
    checkForWinner();
}

/**
 * Restarts the game when the restart button in the winner modal is clicked.
 */
function restartGame() {
    hideWinnerModal();
    resetGame();
}