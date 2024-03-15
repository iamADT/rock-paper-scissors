// A game that plays rock, paper scissors with the computer

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3) + 1;
    if(value===1){
        return "rock";
    }
    else if (value ===2){
        return "scissors"
    }
    else if (value === 3){
        return "paper"
    }
}

function getPlayerChoice(){
    return prompt("Type your choice, Rock, Paper or Scissors", "rock");
}


// A function that plays a single round of rock paper scissors
function singleRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "It's a tie";
    }
    else if(
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
    )
    {
        return "Computer wins";
    }
    else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    )
    {
        return "You win";
    }
    else {
        return `An error has occured. Could not determine the winner. You typed in "${playerSelection}"`
    }
}

/// A function that plays 5 rounds of rock paper scissors
function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        
        if (playerSelection === null) {
            return "Game cancelled by the player.";
        }
        
        let result = singleRound(playerSelection, computerSelection)
        if (result === "You win"){
            playerScore += 1;
        }
        else if (result === "Computer wins"){
            computerScore += 1;
        }
        console.log(result);
    }
    if(playerScore > computerScore){
        return `You win ${playerScore} to ${computerScore}`;
    }
    else if (computerScore > playerScore){
        return `Computer wins ${computerScore} to ${playerScore}`;;
    }
}

console.log(playGame());

