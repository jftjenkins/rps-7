// Initialize game mode & scores
let playerScore = 0;
let computerScore = 0;

// Updates score board
function increasePlayerScore() {
    playerScore++;
    updateScoreBoard();
}

function increaseComputerScore() {
    computerScore++;
    updateScoreBoard();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
}

function updateScoreBoard() {
    const playerScoreElement = document.getElementById('player');
    const computerScoreElement = document.getElementById('computer');

    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'water', 'air', 'fire', 'sponge'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        alert(`You chose ${playerChoice}, computer chose ${computerChoice}. It's a tie!`);
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'fire' || computerChoice === 'sponge')) ||
        (playerChoice === 'paper' && (computerChoice === 'air' || computerChoice === 'rock' || computerChoice === 'water')) ||
        (playerChoice === 'scissors' && (computerChoice === 'air' || computerChoice === 'paper' || computerChoice === 'sponge')) ||
        (playerChoice === 'water' && (computerChoice === 'rock' || computerChoice === 'fire' || computerChoice === 'scissors')) ||
        (playerChoice === 'air' && (computerChoice === 'fire' || computerChoice === 'rock' || computerChoice === 'water')) ||
        (playerChoice === 'fire' && (computerChoice === 'scissors' || computerChoice === 'paper' || computerChoice === 'sponge')) ||
        (playerChoice === 'sponge' && (computerChoice === 'paper' || computerChoice === 'air' || computerChoice === 'water'))
    ) {
        alert(`You chose ${playerChoice}, computer chose ${computerChoice}. You win!`);
        increasePlayerScore();
    } else {
        alert(`You chose ${playerChoice}, computer chose ${computerChoice}. Computer wins!`);
        increaseComputerScore();
    }
}