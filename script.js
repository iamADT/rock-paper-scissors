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

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function getPlayerChoice(e){
    const buttonText = e.target.textContent;
    console.log(buttonText.toLowerCase())
}

rock.addEventListener("click", getPlayerChoice);
paper.addEventListener("click", getPlayerChoice);
scissors.addEventListener("click", getPlayerChoice);




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