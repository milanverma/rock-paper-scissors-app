let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function play(playerSelection) {
    const computerSelection = computerPlay();

    let resultText = `You chose ${playerSelection}, computer chose ${computerSelection}. `;
    if (playerSelection === computerSelection) {
        resultText += "It's a draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultText += "You win this round!";
        playerScore++;
    } else {
        resultText += "Computer wins this round!";
        computerScore++;
    }

    document.getElementById("result").textContent = resultText;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}