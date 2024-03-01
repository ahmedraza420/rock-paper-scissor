
let options = ['rock', 'paper', 'scissor'];

function getComputerChoice () {
    return options[Math.floor(Math.random() * options.length)];
}


let computerChoice = getComputerChoice();
let playerChoice;
let computerIndex = options.indexOf(computerChoice);
let playerIndex;
do{
    playerChoice = prompt("Choose one:\n1. Rock\n2. Paper\n3. Scissor");
    playerIndex = options.indexOf(playerChoice.toLowerCase());
}
while(playerIndex < 0);
    

function playRound(playerSelection, computerSelection) {
    // console.log("player: " + playerSelection + "\ncomputer: " + computerSelection);
    if (playerSelection == 0 && computerSelection == 1)
    {
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection == 1 && computerSelection == 2)
    {
        console.log("You Lose! Scissor beats Paper");
    }
    else if (playerSelection == 2 && computerSelection == 0)
    {
        console.log("You Lose! Rock beats Scissor");
    }
    else if (playerSelection == 1 && computerSelection == 0)
    {
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection == 2 && computerSelection == 1)
    {
        console.log("You Win! Scissor beats Paper");
    }
    else if (playerSelection == 0 && computerSelection == 1)
    {
        console.log("You Win! Rock beats Scissor");
    }
    else if (playerSelection == computerSelection)
    {
        console.log('Draw! ' + "you both chose " + options[playerSelection]);
    }
}

playRound(playerIndex, computerIndex);