let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors", "lizard"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function play(playerSelection) {
    const computerSelection = computerPlay();

    let resultText = `You chose ${playerSelection}, computer chose ${computerSelection}. `;

    if (playerSelection === computerSelection) {
        resultText += "It's a draw!";
    } else {
        const winsAgainst = {
            rock: ["scissors", "lizard"],
            paper: ["rock"],
            scissors: ["paper", "lizard"],
            lizard: ["paper"]
        };

        if (winsAgainst[playerSelection]?.includes(computerSelection)) {
            resultText += "You win this round!";
            playerScore++;
        } else {
            resultText += "Computer wins this round!";
            computerScore++;
        }
    }

    document.getElementById("result").textContent = resultText;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

