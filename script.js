// fetching html elements in js

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerOptions = document.querySelectorAll(".playerOption");
const computerSide = document.querySelector("#computerSide");
const roundLabel = document.querySelector("#roundNumber");
const overlay = document.querySelector("#overlay");
const gameOverModal = document.querySelector(".gameOverModal");
const gameOverModalButton = document.querySelector("#gameOverModalButton");
const playerChoiceDisplay = document.querySelector('#playerChoice');
const computerChoiceDisplay = document.querySelector('#computerChoice');
document.getElementById("year").innerHTML = new Date().getFullYear();
const containerCard = document.querySelectorAll(".containerCard");
const choiceIcons = document.querySelectorAll(".choiceIcon");
const rockDiv = document.querySelector("#rock");
const paperDiv = document.querySelector("#paper");
const scissorDiv = document.querySelector("#scissor");
const rockSign = choiceIcons[0];
const paperSign = choiceIcons[1];
const scissorSign = choiceIcons[2];
const info = document.querySelector("#info");
const gameOverText = document.querySelector("#gameOverText");
const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" fill= "#111720"  viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 71.188 c -14.44 0 -26.188 -11.748 -26.188 -26.188 c 0 -14.44 11.748 -26.188 26.188 -26.188 c 14.439 0 26.188 11.748 26.188 26.188 c 0 4.725 -1.272 9.355 -3.679 13.392 C 62.804 66.284 54.179 71.188 45 71.188 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 45 14.864 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 10.864 C 47 13.968 46.104 14.864 45 14.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 45 90 c -1.104 0 -2 -0.896 -2 -2 V 77.137 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 47 89.104 46.104 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 12.864 47 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 10.864 c 1.104 0 2 0.896 2 2 S 13.968 47 12.864 47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 88 47 H 77.137 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 88 c 1.104 0 2 0.896 2 2 S 89.104 47 88 47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 67.724 24.276 c -0.512 0 -1.023 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 7.682 -7.682 c 0.781 -0.781 2.047 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 l -7.682 7.682 C 68.747 24.081 68.235 24.276 67.724 24.276 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 14.594 77.405 c -0.512 0 -1.024 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 7.682 -7.682 c 0.781 -0.781 2.048 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 l -7.682 7.682 C 15.618 77.21 15.106 77.405 14.594 77.405 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 22.276 24.276 c -0.512 0 -1.024 -0.195 -1.414 -0.586 l -7.682 -7.682 c -0.781 -0.781 -0.781 -2.047 0 -2.828 c 0.78 -0.781 2.048 -0.781 2.828 0 l 7.682 7.682 c 0.781 0.781 0.781 2.047 0 2.828 C 23.3 24.081 22.788 24.276 22.276 24.276 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 75.405 77.405 c -0.512 0 -1.023 -0.195 -1.414 -0.586 l -7.682 -7.682 c -0.781 -0.781 -0.781 -2.047 0 -2.828 s 2.047 -0.781 2.828 0 l 7.682 7.682 c 0.781 0.781 0.781 2.047 0 2.828 C 76.429 77.21 75.917 77.405 75.405 77.405 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 32.703 17.311 c -0.785 0 -1.53 -0.465 -1.849 -1.235 L 26.697 6.039 c -0.423 -1.021 0.062 -2.19 1.082 -2.613 c 1.022 -0.422 2.19 0.062 2.613 1.082 l 4.158 10.037 c 0.423 1.021 -0.062 2.19 -1.082 2.613 C 33.217 17.261 32.958 17.311 32.703 17.311 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 61.456 86.728 c -0.785 0 -1.529 -0.466 -1.849 -1.235 L 55.45 75.456 c -0.423 -1.021 0.062 -2.19 1.082 -2.613 c 1.023 -0.422 2.19 0.063 2.613 1.082 l 4.157 10.036 c 0.423 1.021 -0.062 2.19 -1.082 2.613 C 61.97 86.678 61.711 86.728 61.456 86.728 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 5.274 63.456 c -0.785 0 -1.53 -0.466 -1.849 -1.235 c -0.423 -1.021 0.062 -2.19 1.083 -2.613 l 10.037 -4.157 c 1.021 -0.423 2.19 0.063 2.613 1.082 c 0.423 1.021 -0.062 2.19 -1.083 2.613 L 6.038 63.303 C 5.788 63.406 5.529 63.456 5.274 63.456 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 74.691 34.703 c -0.785 0 -1.529 -0.465 -1.849 -1.235 c -0.423 -1.021 0.062 -2.19 1.082 -2.613 l 10.036 -4.158 c 1.021 -0.422 2.189 0.062 2.613 1.082 c 0.423 1.021 -0.062 2.19 -1.082 2.613 L 75.456 34.55 C 75.206 34.653 74.946 34.703 74.691 34.703 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 57.297 17.311 c -0.255 0 -0.514 -0.049 -0.765 -0.153 c -1.021 -0.422 -1.505 -1.592 -1.082 -2.613 l 4.157 -10.037 c 0.423 -1.021 1.588 -1.506 2.613 -1.083 c 1.021 0.422 1.505 1.592 1.082 2.613 l -4.157 10.037 C 58.826 16.846 58.082 17.311 57.297 17.311 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 28.543 86.728 c -0.255 0 -0.514 -0.05 -0.765 -0.153 c -1.021 -0.423 -1.505 -1.593 -1.082 -2.613 l 4.158 -10.036 c 0.422 -1.02 1.591 -1.504 2.613 -1.082 c 1.021 0.423 1.505 1.593 1.082 2.613 l -4.158 10.036 C 30.073 86.262 29.329 86.728 28.543 86.728 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 15.309 34.703 c -0.255 0 -0.514 -0.049 -0.765 -0.153 L 4.507 30.392 c -1.02 -0.423 -1.505 -1.593 -1.082 -2.613 c 0.422 -1.02 1.59 -1.506 2.613 -1.082 l 10.037 4.158 c 1.02 0.423 1.505 1.593 1.082 2.613 C 16.839 34.238 16.094 34.703 15.309 34.703 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 84.726 63.456 c -0.255 0 -0.514 -0.05 -0.765 -0.153 l -10.036 -4.157 c -1.021 -0.423 -1.505 -1.593 -1.082 -2.613 c 0.423 -1.02 1.589 -1.505 2.613 -1.082 l 10.036 4.157 c 1.021 0.423 1.505 1.593 1.082 2.613 C 86.255 62.99 85.511 63.456 84.726 63.456 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #F5E8C7; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>`;
const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" fill= "#373b41"  viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 46.607 90 c -12.452 0 -24.159 -4.849 -32.964 -13.654 c -18.176 -18.177 -18.176 -47.752 0 -65.928 c 4.469 -4.469 9.687 -7.925 15.507 -10.273 c 0.813 -0.327 1.742 -0.089 2.295 0.588 C 32 1.41 32.051 2.368 31.57 3.099 c -10.35 15.731 -8.183 36.83 5.154 50.167 l 0 0 c 13.338 13.336 34.437 15.503 50.166 5.153 c 0.73 -0.482 1.69 -0.431 2.366 0.123 c 0.678 0.555 0.915 1.484 0.588 2.296 c -2.347 5.82 -5.803 11.038 -10.272 15.508 C 70.766 85.151 59.059 90 46.607 90 z M 25.065 6.595 c -3.118 1.827 -5.994 4.051 -8.594 6.651 c -16.616 16.617 -16.616 43.654 0 60.271 C 24.521 81.567 35.223 86 46.607 86 s 22.086 -4.433 30.136 -12.482 c 2.6 -2.601 4.824 -5.477 6.651 -8.595 c -16.447 7.582 -36.384 4.285 -49.499 -8.829 l 0 0 C 20.781 42.979 17.484 23.041 25.065 6.595 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>`;
const modeToggle = document.querySelector("#modeToggle");
const themeElements = document.querySelectorAll(".light");

// Game
let options = ['rock', 'paper', 'scissor'];
let totalOptions = options.length;

// initial theme
let toggle = false;


// overlay.setAttribute('.overlayHide');
function getComputerChoice () {
    return Math.floor(Math.random() * totalOptions);
}

let computerChoice;
let playerChoice;
let roundWinnerScore = [0, 0]; // index 0 for player, index 1 for bot
let roundNumber = 0;


Array.from(playerOptions).forEach((item) => {
    item.addEventListener('click', (e) => {
        computerChoice = getComputerChoice();
    console.log(computerChoice + " " + options.indexOf(item.getAttribute('id')));
        playRound(options.indexOf(item.getAttribute('id')), computerChoice);
    })
});




function playRound(playerSelection, computerSelection) {
    if (roundWinnerScore[0] < 5 && roundWinnerScore[1] < 5)
        {
            if (playerSelection == 0 && computerSelection == 1)
                {
                    roundWinnerScore[1]++;
                    info.innerText = callRoundWinner(computerSelection, playerSelection);
                }
                else if (playerSelection == 1 && computerSelection == 2)
                {
                    roundWinnerScore[1]++;
                    info.innerText = callRoundWinner(computerSelection, playerSelection);
                }
                else if (playerSelection == 2 && computerSelection == 0)
                {
                    roundWinnerScore[1]++;
                    info.innerText = callRoundWinner(computerSelection, playerSelection);
                }
                else if (playerSelection == 1 && computerSelection == 0)
                    {
                    roundWinnerScore[0]++;
                    info.innerText = callRoundWinner(playerSelection, computerSelection);
                }
                else if (playerSelection == 2 && computerSelection == 1)
                {
                    roundWinnerScore[0]++;
                    info.innerText = callRoundWinner(playerSelection, computerSelection);
                }
                else if (playerSelection == 0 && computerSelection == 2)
                {
                    roundWinnerScore[0]++;
                    info.innerText = callRoundWinner(playerSelection, computerSelection);
                }
                else if (playerSelection == computerSelection)
                {
                    info.innerText = callRoundWinner(playerSelection, computerSelection);
                }
                roundNumber++;


                switch(playerSelection)
                {
                    case 0:
                        playerChoiceDisplay.innerHTML = rockSign.outerHTML;
                        break;
                    case 1:
                        playerChoiceDisplay.innerHTML = paperSign.outerHTML;
                        break;
                    case 2:
                        playerChoiceDisplay.innerHTML = scissorSign.outerHTML;
                        break;
                }

                switch(computerSelection)
                {
                    case 0:
                        computerChoiceDisplay.innerHTML = rockSign.outerHTML;
                        break;
                    case 1:
                        computerChoiceDisplay.innerHTML = paperSign.outerHTML;
                        break;
                    case 2:
                        computerChoiceDisplay.innerHTML = scissorSign.outerHTML;
                        break;
                }

                // const compDisTimeout = setTimeout(() => {computerChoiceDisplay.innerHTML = ''; playerChoiceDisplay.innerHTML = ''}, 3000);
        }
        
        
        playerScore.innerText = roundWinnerScore[0];
        computerScore.innerText = roundWinnerScore[1];
    roundLabel.innerText = "Round " + roundNumber;
    
    if(roundWinnerScore[0] >= 5 || roundWinnerScore[1] >= 5)
        {
            // restartGame();
            // alert('game restarted');
            // gameOverModal.style.display = 'flex';
            // overlay.style.display = 'flex';
            // overlay.setAttribute('.overlayShow');
            overlayToggle();
            if  (roundWinnerScore[0] > roundWinnerScore[1])
                {
                    gameOverText.innerText = "You Won";
                }
            else 
                {
                    gameOverText.innerText = "You Lost";
                }   
        }
        
    }

function callRoundWinner(roundWinner, roundLoser)
{
    if (roundWinner == roundLoser) return `It's a Tie!`;
    else return `${options[roundWinner][0].toUpperCase() + options[roundWinner].slice(1)} beats ${options[roundLoser][0].toUpperCase() + options[roundLoser].slice(1)}`;
}

function restartGame() {
    roundWinnerScore[0] = 0;
    roundWinnerScore[1] = 0;
    roundNumber = 0;
    playerScore.innerText = '0';
    computerScore.innerText = '0';
    roundLabel.innerText = 'Start';
    computerChoiceDisplay.innerHTML = '';
    playerChoiceDisplay.innerHTML = '';
    info.innerText = 'Choose an option';
}

function playGame()
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
        return "NOOB! YOU HAVE LOST THE GAME TO A SIMPLE COMPUTERSELECTION.";
    }
    else {
        return "IT'S A DRAW!";
    }
}

function overlayToggle() {
    if(overlay.classList.contains('overlayShow')) 
        {
            overlay.classList.remove('overlayShow');
            overlay.classList.add('overlayHide');
        }
    else if(overlay.classList.contains('overlayHide'))
        {
            overlay.classList.remove('overlayHide');
            overlay.classList.add('overlayShow');
        }
    else
        {
            overlay.classList.add('overlayShow');
        }
}

overlay.addEventListener('click', (e) => {
    if (e.target == overlay && e.target != gameOverModal) 
        {
            overlayToggle();//overlay.style.display = 'none';
            restartGame();
        }
});

gameOverModalButton.addEventListener('click', (e) => {
    // gameOverModal.style.display = 'none'
    // overlay.style.display = 'none';
    if (e.target == gameOverModalButton)
        {
    overlayToggle();
    restartGame();
        }
});

// Dark Mode
modeToggle.addEventListener('click', ()=> {
    if (toggle == false)
        {
            modeToggle.innerHTML = lightIcon;
            toggle = true;
            containerCard.forEach(element => {
                element.classList.remove("lightContainer");
                element.classList.add('darkContainer');
            });
            choiceIcons.forEach(element => {
                element.classList.remove('svgLight');
                element.classList.add('svgDark');
            });
            themeElements.forEach(element => {
                element.classList.remove("light");
                element.classList.add("dark");
            });
            // modeToggle.style.border = '3px solid #cccccc';
        }
    else 
    {
        // console.log('dark mode right now');
        modeToggle.innerHTML = darkIcon;
        toggle = false;
        containerCard.forEach(element => {
            element.classList.remove("darkContainer");
            element.classList.add('lightContainer');
        });
        choiceIcons.forEach(element => {
            element.classList.remove('svgDark');
            element.classList.add('svgLight');
        });
            themeElements.forEach(element => {
                element.classList.remove("dark");
                element.classList.add("light");
            });
            // modeToggle.style.border = '3px solid #111720';
    }
});