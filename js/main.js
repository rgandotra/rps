function computerPlay() {
    const NUM_CHOICES = 3;
    const randomVal = Math.floor(Math.random() * NUM_CHOICES);
    if (randomVal == 0) {
        return 'ROCK';
    }
    else if (randomVal > 1) {
        return 'PAPER';
    }
    else return 'SCISSORS';
}

const RESULT_TYPES = {
    TIE: "TIE",
    WIN: "WIN",
    LOSE: "LOSE",
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection === computerSelection) {
        return RESULT_TYPES.TIE;
    }
    
    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            return RESULT_TYPES.LOSE;
        } else {
            return RESULT_TYPES.WIN;
        }
    }
    
    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            return RESULT_TYPES.WIN;
        } else {
            return RESULT_TYPES.LOSE;
        }
    }
    
    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            return RESULT_TYPES.LOSE;
        } else {
            return RESULT_TYPES.WIN;
        }
    }
}

function outcomeDescriptionText(resultType, playerSelection, computerSelection) {      
    switch(resultType) {
        case RESULT_TYPES.TIE:
        return 'Tie Game!'
        case RESULT_TYPES.WIN:
        return `You Win! ${playerSelection} beats ${computerSelection}`
        default:
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function displaySelections(playerSelection, computerSelection) {

    document.getElementById("player-selection").textContent = playerSelection;
    document.getElementById("computer-selection").textContent = computerSelection;
}

function game(playerSelection, computerSelection) {
    
    displaySelections(playerSelection, computerSelection);
    
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("outcome-description").textContent =
             outcomeDescriptionText(result, playerSelection, computerSelection);
    
    if (result === RESULT_TYPES.WIN) {
        playerScore = playerScore + 1; 
    } else if (result === RESULT_TYPES.LOSE) {
        computerScore = computerScore + 1;
    }
    
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
        gameOver();
    }
}

function gameOver() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (playerScore >computerScore) {
        document.getElementById("game-over").textContent = "The Player is the Winner! Reload the page to play again!";
    }
    else {
        document.getElementById("game-over").textContent = "The Computer is the Winner! Reload the page to play again!";
    }
}

const rockButton = document.querySelector('#rock-selection-button');
const paperButton = document.querySelector('#paper-selection-button');
const scissorsButton = document.querySelector('#scissors-selection-button');

let playerSelection ="";
let computerSelection=""; 
let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

rockButton.addEventListener('click', () => {
    playerSelection = rockButton.dataset.selection;
    computerSelection= computerPlay();
    game(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    playerSelection = paperButton.dataset.selection;
    computerSelection= computerPlay();
    game(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.dataset.selection;
    computerSelection= computerPlay();
    game(playerSelection, computerSelection);
});
