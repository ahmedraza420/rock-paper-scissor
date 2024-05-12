// Display of the Choices
const playerOptions = document.querySelectorAll(".playerc");
const computerOptions = document.querySelectorAll(".computerc");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerSide = document.querySelectorAll(".choice" && ".playerc");
const computerSide = document.querySelector("#computerSide");

document.getElementById("year").innerHTML = new Date().getFullYear();

Array.from(computerOptions).forEach(item => item.style.opacity = "50%");


// Game
let options = ['rock', 'paper', 'scissor'];
let totalOptions = 3;

function getComputerChoice () {
    return Math.floor(Math.random() * totalOptions);
}

let computerChoice;
let playerChoice;
let roundWinnerScore = [0, 0]; // index 0 for player, index 1 for bot
playerScore.innerText = roundWinnerScore[0];
computerScore.innerText = roundWinnerScore[1];

let playerOptionIds = ['playerRock', 'playerPaper', 'playerScissor'];

Array.from(playerSide).forEach(item => {
item.addEventListener('click', (e) => {
    computerChoice = getComputerChoice();
    console.log(computerChoice + " " + playerOptionIds.indexOf(e.target.closest('.choice').getAttribute('id')));
})
});

// playerSide.addEventListener('click', (e) => {
//     computerChoice = getComputerChoice()    
//     for (index in playerOptionIds) if (playerOptionIds[index] == e.target.closest('.choice').getAttribute('id')) playerChoice = index;
//     console.log(computerChoice + " " + playerChoice);
//     startGame();
// });


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
    else if (user == 0 && bot == 2)
    {
        roundWinnerScore[0]++;
        return "You Won the Round! Rock beats Scissor";
    }
    else if (user == bot)
    {
        return "Round Draw! You both chose " + computerSelection;
    }
}


function startGame()
{
    let resultString;
    // for (let i = 0; i < 5; i++)
    // {
    //     computerChoice = getComputerChoice();
    //     playerChoice = prompt("Choose one:\nRock\nPaper\nScissor");
    //     resultString = playRound(playerChoice, computerChoice);
    //     while (resultString === undefined) 
    //     {
    //         playerChoice = prompt("Looks like you choose a wrong option.\nChoose again:\nRock\nPaper\nScissor");
    //         resultString = playRound(playerChoice, computerChoice);
    //     }
    //     console.log(resultString);

    // }
    // console.log(roundWinnerScore[0] + " " + roundWinnerScore[1]);
    playerScore.innerText = roundWinnerScore[0];
    computerScore.innerText = roundWinnerScore[1];

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

