// Declaring the varaibles
const startGame = document.querySelector('#startGame')
const rock = document.querySelector('.choiceButton[name="rock"]');
const paper = document.querySelector('.choiceButton[name="paper"]');
const scissors = document.querySelector('.choiceButton[name="scissors"]');
const reset = document.querySelector('#reset');
const output = document.querySelector(".output");
let playerScoreText = document.querySelector('#playerScore');
let computerScoreText = document.querySelector('#computerScore');
const gameResultText = document.querySelector('#gameResultText');

let playerScore = 0;
let computerScore = 0;
playerScoreText.textContent = 0;
computerScoreText.textContent = 0;

let playerSelection;
let computerSelection;

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3) + 1;
    if(value===1){
        return "rock";
    }
    else if (value ===2){
        return "paper"
    }
    else if (value === 3){
        return "scissors"
    }
}

// A function that plays a game of 5
function playGame(event){
    reset.disabled = false;
    output.innerHTML='';

    playerSelection = event.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice();
    let gameResult = singleRound(playerSelection, computerSelection);

    displayRoundResult(playerSelection, computerSelection, gameResult);

    if (gameResult !== "It's a tie") {
        updateScore(gameResult === "You win" ? "player" : "computer");
    }
   
    
    let score = playerScore + computerScore;
    checkGameEnd(score);
}

function displayRoundResult (playerSelection, computerSelection, gameResult){
    const playerChoiceText = document.createElement('p');
    playerChoiceText.textContent = `You selected ${playerSelection}`;

    const computerChoiceText = document.createElement('p');
    computerChoiceText.textContent = `Computer selected ${computerSelection}`;

    const resultText = document.createElement('p'); 
    resultText.textContent = `${gameResult}. Select another choice to play again.`
    
    output.appendChild(playerChoiceText);
    output.appendChild(computerChoiceText);
    output.appendChild(resultText);
}

function updateScore(winner){
    if(winner === "computer"){
        computerScore += 1 ;
        computerScoreText.textContent = computerScore;
    }
    else if (winner === "player"){
        playerScore += 1;
        playerScoreText.textContent = playerScore;
    }
}

function checkGameEnd(score){
    if(score === 5){
        if (playerScore > computerScore){
            gameResultText.textContent = "You win";
        }
        else {
            gameResultText.textContent = "Computer Wins!";
        }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

//Listening for the user's activities
startGame.addEventListener("click", ()=> {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    startGame.disabled = true;
})

reset.addEventListener("click", ()=> {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    startGame.disabled = false;
    reset.disabled = true;
})

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);



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