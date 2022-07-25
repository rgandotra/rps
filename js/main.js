const RESULT_TYPES = {
  TIE: "TIE",
  WIN: "WIN",
  LOSE: "LOSE",
};

let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

function computerPlay() {
  const NUM_CHOICES = 3;
  const randomVal = Math.floor(Math.random() * NUM_CHOICES);
  if (randomVal == 0) {
    return "ROCK";
  } else if (randomVal > 1) {
    return "PAPER";
  } else return "SCISSORS";
}

function computeOutcome(playerSelection, computerSelection) {
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

function outcomeDescriptionText(
  resultType,
  playerSelection,
  computerSelection
) {
  switch (resultType) {
    case RESULT_TYPES.TIE:
      return "Tie Game!";
    case RESULT_TYPES.WIN:
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    default:
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function displayOutcomeDescription(result, playerSelection, computerSelection) {
  document.getElementById("outcome-description").textContent =
    outcomeDescriptionText(result, playerSelection, computerSelection);
}

function displaySelections(playerSelection, computerSelection) {
  document.getElementById("player-selection").textContent = playerSelection;
  document.getElementById("computer-selection").textContent = computerSelection;
}

function updateWinnerScore(result) {
  if (result === RESULT_TYPES.WIN) {
    playerScore = playerScore + 1;
  } else if (result === RESULT_TYPES.LOSE) {
    computerScore = computerScore + 1;
  }
}

function displayUpdatedScores() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function playRound(playerSelection, computerSelection) {
  displaySelections(playerSelection, computerSelection);

  const result = computeOutcome(playerSelection, computerSelection);

  displayOutcomeDescription(result, playerSelection, computerSelection);

  updateWinnerScore(result);

  displayUpdatedScores();

  const isGameOver = playerScore === MAX_SCORE || computerScore === MAX_SCORE;
  if (isGameOver) {
    displayGameOver();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll(".selection-button");
  buttons.forEach(function (button) {
    button.disabled = true;
  });
}

function displayGameOver() {
  disableButtons();

  const playerWin = playerScore > computerScore;

  document.getElementById("game-over").textContent = `The ${
    playerWin ? "Player" : "Computer"
  } is the Winner! Reload the page to play again!`;
}

function addButtonClickListeners() {
  const buttons = document.querySelectorAll(".selection-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", () => {
      const playerSelection = button.dataset.selection;
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    });
  });
}

addButtonClickListeners();
