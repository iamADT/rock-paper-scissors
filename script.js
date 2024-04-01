// A game that plays rock, paper scissors with the computer



const rock = document.querySelector('.choiceButton[name="rock"]');
const paper = document.querySelector('.choiceButton[name="paper"]');
const scissors = document.querySelector('.choiceButton[name="scissors"]');
const output = document.querySelector(".output")
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3) + 1;
    if(value===1){
        const para = document.createElement('p')
        para.textContent = `Computer selected rock`;
        output.appendChild(para)
        return "rock";
    }
    else if (value ===2){
        const para = document.createElement('p')
        para.textContent = `Computer selected paper`;
        output.appendChild(para)
        return "paper"
    }
    else if (value === 3){
        const para = document.createElement('p')
        para.textContent = `Computer selected scissors`;
        output.appendChild(para)
        return "scissors"
    }
}

function playGame(event){
    output.innerHTML='';

    playerSelection = event.target.textContent.toLowerCase();
    const para = document.createElement('p')
    para.textContent = `You selected ${playerSelection}`;
    output.appendChild(para)
    
    let computerSelection = getComputerChoice();
    let gameResult = singleRound(playerSelection, computerSelection);
    const resultPara = document.createElement('p');
    resultPara.textContent = `${gameResult}. Select another choice to play again.`;
    output.appendChild(resultPara);
}

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