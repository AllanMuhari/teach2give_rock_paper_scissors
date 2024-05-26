const scoreBoard = document.getElementById("score_board");
const resultDisplay = document.getElementById("result");
const playerChoiceDisplay = document
  .getElementById("player_choice")
  .querySelector(".emoji");
const computerChoiceDisplay = document.querySelector(
  ".computer_selection .emoji"
);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

let playerScore = 0;
let computerScore = 0;

const choices = ["✊", "✋", "✌️"];
const choiceMap = {
  "✊": "rock",
  "✋": "paper",
  "✌️": "scissors",
};

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const playerEmoji = getEmoji(playerChoice);
  const computerEmoji = computerChoice;

  playerChoiceDisplay.textContent = playerEmoji;
  computerChoiceDisplay.textContent = computerEmoji;

  const winner = determineWinner(playerChoice, choiceMap[computerEmoji]);
  updateScore(winner);
  displayResult(winner);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getEmoji(choice) {
  for (const [emoji, name] of Object.entries(choiceMap)) {
    if (name === choice) {
      return emoji;
    }
  }
}

function determineWinner(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "draw";
        case "paper":
          return "computer";
        case "scissors":
          return "player";
      }
    case "paper":
      switch (computerChoice) {
        case "rock":
          return "player";
        case "paper":
          return "draw";
        case "scissors":
          return "computer";
      }
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "computer";
        case "paper":
          return "player";
        case "scissors":
          return "draw";
      }
    default:
      return "draw";
  }
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  scoreBoard.textContent = `Computer ${computerScore} ${playerScore} Player`;
}

function displayResult(winner) {
  if (winner === "player") {
    resultDisplay.textContent = "You Win!";
  } else if (winner === "computer") {
    resultDisplay.textContent = "You Lose!";
  } else {
    resultDisplay.textContent = "Draw";
  }
}
