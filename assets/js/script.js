function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'water', 'air', 'fire', 'sponge'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'fire' || computerChoice === 'sponge')) ||
        (playerChoice === 'paper' && (computerChoice === 'air' || computerChoice === 'rock' || computerChoice === 'water')) ||
        (playerChoice === 'scissors' && (computerChoice === 'air' || computerChoice === 'paper' || computerChoice === 'sponge')) ||
        (playerChoice === 'water' && (computerChoice === 'rock' || computerChoice === 'fire' || computerChoice === 'scissors')) ||
        (playerChoice === 'air' && (computerChoice === 'fire' || computerChoice === 'rock' || computerChoice === 'water')) ||
        (playerChoice === 'fire' && (computerChoice === 'scissors' || computerChoice === 'paper' || computerChoice === 'sponge')) ||
        (playerChoice === 'sponge' && (computerChoice === 'paper' || computerChoice === 'air' || computerChoice === 'water'))
    ) {
        alert("You win!");
        increasePlayerScore();
    } else {
        alert("Computer wins!");
        increaseComputerScore();
    }
}

function computerChoice() {

}

function checkResult() {

}

function increasePlayerScore() {

}

function increaseComputerScore() {

}

function easyMode() {

}

function normalMode() {

}

function hardMode() {

}