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

function displaySelections(computerSelection, playerSelection) {

    document.getElementById("computer-selection").textContent = computerSelection;
    document.getElementById("player-selection").textContent = playerSelection;
}

function game() {
    const NUM_ROUNDS = 1;
    
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < NUM_ROUNDS; i++) {
        const playerSelection = prompt("Rock, paper or scissors?").toUpperCase();
        const computerSelection = computerPlay();
        
        displaySelections(computerSelection, playerSelection);
        
        const result = playRound(playerSelection, computerSelection);
        console.log(`${outcomeDescriptionText(result, playerSelection, computerSelection)}`);
        
        if (result === RESULT_TYPES.WIN) {
            playerScore = playerScore + 1; 
        } else if (result === RESULT_TYPES.LOSE) {
            computerScore = computerScore + 1;
        }
        
        console.log(`The Score is ${playerScore} - ${computerScore}`);
    } 
    
    if (playerScore > computerScore) {
        console.log("you are the winner");
    }
    else {
        console.log(`too bad`);
    }
}

const playerSelection =""; 

const rockButton = document.querySelector('#rock-selection-button');
rockButton.addEventListener('click', () => {
    playerSelection = rockButton.dataset.selection;
});

const paperButton = document.querySelector('#paper-selection-button');
paperButton.addEventListener('click', () => {
    playerSelection = paperButton.dataset.selection;
});

const scissorsButton = document.querySelector('#scissors-selection-button');
scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.dataset.selection;
});

//console.log(game());