
let options = ['rock', 'paper', 'scissor'];

function getComputerChoice () {
    return options[Math.floor(Math.random() * options.length)];
}

let computerChoice;
let playerChoice;
let roundWinnerScore = [0, 0]; // index 0 for player, index 1 for bot

function playRound(playerSelection, computerSelection) {
    let user = options.indexOf(playerSelection.toLowerCase());
    let bot = options.indexOf(computerSelection);
    // console.log("user: " + user + " bot: " + bot);
    // console.log("player: " + playerSelection + "\ncomputer: " + computerSelection);



    if (user == 0 && bot == 1)
    {
        roundWinnerScore[1]++;
        return "You Lost the Round! Paper beats Rock";
    }
    else if (user == 1 && bot == 2)
    {
        roundWinnerScore[1]++;
        return "You Lost the Round! Scissor beats Paper";
    }
    else if (user == 2 && bot == 0)
    {
        roundWinnerScore[1]++;
        return "You Lost the Round! Rock beats Scissor";
    }
    else if (user == 1 && bot == 0)
    {
        roundWinnerScore[0]++;
        return "You Won the Round! Paper beats Rock";
    }
    else if (user == 2 && bot == 1)
    {
        roundWinnerScore[0]++;
        return "You Won the Round! Scissor beats Paper";
    }
    else if (user == 0 && bot == 1)
    {
        roundWinnerScore[0]++;
        return "You Won the Round! Rock beats Scissor";
    }
    else if (user == bot)
    {
        return "Round Draw! You both chose " + computerSelection;
    }
}


function playGame()
{
    let resultString;
    for (let i = 0; i < 5; i++)
    {
        computerChoice = getComputerChoice();
        playerChoice = prompt("Choose one:\nRock\nPaper\nScissor");
        resultString = playRound(playerChoice, computerChoice);
        while (resultString === undefined) 
        {
            playerChoice = prompt("A problem occured.\nChoose again:\nRock\nPaper\nScissor");
            resultString = playRound(playerChoice, computerChoice);
        }
        console.log(resultString);

    }
    // console.log(roundWinnerScore[0] + " " + roundWinnerScore[1]);
    if (roundWinnerScore[0] > roundWinnerScore[1])
    {
        return "YAY! YOU HAVE WON THE GAME.";
    }
    else if (roundWinnerScore[0] < roundWinnerScore[1])
    {
        return "NOOB! YOU HAVE LOST THE GAME TO A SIMPLE BOT.";
    }
    else {
        return "IT'S A DRAW!";
    }
}

console.log(playGame());