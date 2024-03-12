
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



    if (user == 0 && bot == 1)
    {
        return "You Lose! Paper beats Rock";
    }
    else if (user == 1 && bot == 2)
    {
        return "You Lose! Scissor beats Paper";
    }
    else if (user == 2 && bot == 0)
    {
        return "You Lose! Rock beats Scissor";
    }
    else if (user == 1 && bot == 0)
    {
        return "You Win! Paper beats Rock";
    }
    else if (user == 2 && bot == 1)
    {
        return "You Win! Scissor beats Paper";
    }
    else if (user == 0 && bot == 1)
    {
        return "You Win! Rock beats Scissor";
    }
    else if (user == bot)
    {
        return "Draw! You both chose " + computerSelection;
    }
}

console.log(playRound(playerChoice, computerChoice));