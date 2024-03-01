
let options = ['rock', 'paper', 'scissor'];

function getComputerChoice () {
    return options[Math.floor(Math.random() * options.length)];
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Choose one:\nRock\nPaper\nScissor");

console.log("Player: " + playerChoice + "\nComputer: " + computerChoice)

