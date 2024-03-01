
let options = ['rock', 'paper', 'scissor'];

function getComputerChoice () {
    return options[Math.floor(Math.random() * options.length)];
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Choose one:\nRock\nPaper\nScissor");

function playRound(playerSelection, computerSelection) {
    let user = options.indexOf(playerSelection.toLowerCase());
    let bot = options.indexOf(computerSelection);
    console.log("player: " + playerSelection + "\ncomputer: " + computerSelection);


    let beats = {};

    if (user == 0 && bot == 1)
    {
        console.log("You Lose! Paper beats Rock");
    }
    else if (user == 1 && bot == 2)
    {
        console.log("You Lose! Scissor beats Paper");
    }
    else if (user == 2 && bot == 0)
    {
        console.log("You Lose! Rock beats Scissor");
    }
    else if (user == 1 && bot == 0)
    {
        console.log("You Win! Paper beats Rock");
    }
    else if (user == 2 && bot == 1)
    {
        console.log("You Win! Scissor beats Paper");
    }
    else if (user == 0 && bot == 1)
    {
        console.log("You Win! Rock beats Scissor");
    }
}

playRound(playerChoice, computerChoice);