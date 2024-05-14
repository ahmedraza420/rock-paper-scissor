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
const rockSign = `<svg id='1' class="choiceIcons" fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 427.183 427.183" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M366.214,129.976h-21.621V57.313c0-24.708-20.102-44.809-44.81-44.809c-13.976,0-26.475,6.435-34.698,16.493 C258.68,12.07,242.31,0,223.167,0c-19.277,0-35.747,12.236-42.058,29.348c-8.225-9.96-20.664-16.318-34.56-16.318 c-24.708,0-44.809,20.101-44.809,44.809v0.563c-8.125-8.198-19.383-13.285-31.81-13.285c-24.708,0-44.809,20.101-44.809,44.809 v139.655c0,55.446,18.966,109.714,53.454,153.087v38.013c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-40.3 c0-1.491-0.513-2.936-1.451-4.094c-33.534-41.359-52.003-93.46-52.003-146.707v-33.708c8.125,8.198,19.382,13.285,31.809,13.285 c16.71,0,31.303-9.2,39.006-22.795c7.992,12.324,21.861,20.5,37.612,20.5c16.212,0,30.44-8.654,38.308-21.585 c7.869,12.929,22.096,21.581,38.307,21.581c4.686,0,9.243-0.723,13.62-2.124c8.616,12.478,23.009,20.676,39.287,20.676h13.992v2.058 h-13c-47.421,0-86,38.58-86,86c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5c0-40.252,32.748-73,73-73h19.5c3.59,0,6.5-2.91,6.5-6.5 v-8.558h39.326c3.59,0,6.5-2.91,6.5-6.5s-2.91-6.5-6.5-6.5h-66.318c-19.144,0-34.719-15.575-34.719-34.718 s15.575-34.718,34.719-34.718h90.143c12.598,0,22.846,10.249,22.846,22.846v90.861c0,36.452-17.734,70.829-47.439,91.958 l-0.291,0.207c-21.61,15.372-34.512,40.38-34.512,66.899c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5 c0-22.319,10.858-43.368,29.047-56.306l0.291-0.207c33.127-23.563,52.904-61.899,52.904-102.551v-90.861 C402.06,146.056,385.98,129.976,366.214,129.976z M101.741,164.35c0,17.54-14.27,31.809-31.81,31.809 c-17.539,0-31.809-14.27-31.809-31.809V89.927c0-17.54,14.27-31.809,31.809-31.809c17.54,0,31.81,14.269,31.81,31.809V164.35z M146.549,193.864c-17.539,0-31.809-14.269-31.809-31.809V57.84c0-17.54,14.27-31.809,31.809-31.809S178.358,40.3,178.358,57.84 v0.001h-0.004v104.21c0,0.027,0.002,0.053,0.002,0.079C178.315,179.635,164.063,193.864,146.549,193.864z M228.353,177.694 c0,5.322,0.889,10.438,2.504,15.222c-2.494,0.62-5.064,0.945-7.693,0.945c-17.513,0-31.765-14.227-31.809-31.731 c0-0.025,0.002-0.05,0.002-0.075V44.809c0-17.54,14.27-31.809,31.809-31.809s31.809,14.269,31.809,31.809v90.098 C239.218,142.708,228.353,158.953,228.353,177.694z M267.975,130.677V57.313c0-17.54,14.27-31.809,31.81-31.809 c17.539,0,31.809,14.269,31.809,31.809v72.663h-55.521C273.311,129.976,270.609,130.224,267.975,130.677z"></path> </g></svg>`;
const paperSign = `<svg id='2' class="choiceIcons" fill="#000000" height="100px" width="100px" version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 421.862 421.862" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M317.59,190.935c-8.43,0-16.176,2.978-22.248,7.933V66.745c0-18.287-14.877-33.165-33.165-33.165 c-7.582,0-14.573,2.563-20.165,6.86v-7.276C242.013,14.878,227.136,0,208.849,0s-33.165,14.878-33.165,33.165V48.44 c-5.592-4.297-12.583-6.86-20.165-6.86c-18.287,0-33.165,14.878-33.165,33.165v27.695c-5.592-4.297-12.583-6.86-20.165-6.86 c-18.287,0-33.165,14.878-33.165,33.165v181.651c0,39.583,13.729,78.314,38.658,109.059c1.285,1.584,3.161,2.407,5.053,2.406 c1.438,0,2.886-0.475,4.09-1.451c2.789-2.261,3.216-6.354,0.955-9.143c-23.057-28.437-35.755-64.261-35.755-100.872V128.745 c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165v116.706c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5 V74.745c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165v159.544c0,3.59,2.91,6.5,6.5,6.5 s6.5-2.91,6.5-6.5V33.165c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165V242.97c0,3.59,2.91,6.5,6.5,6.5 s6.5-2.91,6.5-6.5V66.745c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165v233.359 c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-73.922c0-12.267,9.98-22.247,22.248-22.247s22.247,9.98,22.247,22.247v93.109 c0,20.893-7.246,41.338-20.402,57.568s-31.659,27.551-52.1,31.875c-3.512,0.743-5.757,4.192-5.014,7.705 c0.647,3.059,3.347,5.156,6.353,5.156c0.445,0,0.898-0.046,1.352-0.142c23.348-4.939,44.481-17.869,59.508-36.407 c15.027-18.539,23.303-41.891,23.303-65.754v-93.109C352.837,206.747,337.026,190.935,317.59,190.935z"></path> </g></svg>`;
const ScissorSign = `<svg id= '3' class="choiceIcons" style= "transform: rotate(360deg) scaleX(-1)" fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(0 1)"> <g> <path d="M394.33,248.712c5.389-20.66-5.389-42.218-26.049-49.404c-8.084-2.695-17.965-2.695-26.049,0 c0-16.168-10.779-31.439-26.947-36.828l-1.797-0.898c-9.881-2.695-20.66-2.695-29.642,1.797l20.66-110.484 c1.797-12.575,0-25.151-6.288-35.032C290.133,6.186,278.456-1,265.881-1c-22.456,0-37.726,21.558-41.319,44.014l-17.965,115.874 L188.632,51.098c-8.982-37.726-28.744-43.116-39.523-43.116c-12.575,0-25.151,7.186-33.235,18.863 c-6.288,9.881-8.982,22.456-7.186,35.032l26.049,172.463l11.677,56.589l-8.084,6.288c-0.356,0.214-0.674,0.457-0.974,0.712 c-26.918,19.547-29.566,40.054-29.566,68.452v0.898c0,37.726,26.049,66.47,35.93,75.453v32.337c0,19.761,16.168,35.93,35.93,35.93 h162.582c19.761,0,35.032-15.27,35.032-35.93v-33.235c26.049-35.032,26.947-47.607,26.947-110.484 C404.211,298.116,395.228,260.389,394.33,248.712z M284.744,273.863c1.499-3.56,2.325-7.355,2.576-11.237 c1.093-9.441-1.223-18.6-6.232-25.881c-3.023-5.45-6.99-10.326-11.614-14.083l9.881-28.744 c4.491-11.677,16.168-17.067,27.846-13.474l1.797,0.898c4.027,1.342,7.55,3.689,10.199,7.037 c3.49,5.388,4.474,12.194,2.376,19.012l-6.288,17.965c-0.269,0.806-0.426,1.589-0.502,2.349l-30.655,88.559 c-5.495,8.362-15.456,11.867-25.432,8.797l-1.797-0.898c-0.898,0-2.695-0.898-3.593-1.797 C268.575,302.607,280.253,285.54,284.744,273.863z M300.014,325.063l0.273-0.79c1.281-2.024,2.399-4.16,3.32-6.396l32.063-92.182 c0.144-0.178,0.286-0.358,0.435-0.533c0.714-0.831,1.496-1.617,2.333-2.351c0.837-0.734,1.729-1.417,2.664-2.043 c0.936-0.626,1.914-1.194,2.925-1.699c5.389-2.695,11.677-2.695,17.067-0.898s9.881,6.288,12.575,11.677 c2.695,5.389,2.695,11.677,0.898,17.067l-32.337,93.418c-1.797,5.39-6.288,9.881-11.677,12.576 c-5.389,2.695-11.677,2.695-17.067,0.898s-9.881-6.288-12.575-11.677C298.218,336.74,298.218,330.453,300.014,325.063z M152.702,231.646L126.653,59.182c-0.898-8.982,0-16.168,4.491-22.456s11.677-10.779,17.965-10.779 c12.575,0,18.863,16.168,21.558,28.744l26.947,161.684c0.898,3.593,4.491,7.186,8.982,7.186s8.084-2.695,8.982-7.186 l26.947-170.667c2.695-14.372,11.677-28.744,23.354-28.744c6.288,0,12.575,3.593,16.168,9.881 c3.593,6.288,5.389,14.372,3.593,22.456l-27.846,148.211c-0.317,1.587-0.178,3.17,0.322,4.598l-7.411,21.174 c-8.081,0.814-17.989,4.121-29.739,11.955c-11.942,7.962-36.135,26.214-59.187,43.899L152.702,231.646z M361.095,433.751 c-1.796,1.797-1.796,3.593-1.796,6.288v35.032c0,9.881-7.186,17.965-17.067,17.965H179.649c-9.881,0-17.965-8.084-17.965-17.965 v-35.93c0-2.695-0.898-5.389-3.593-7.186c0,0-31.439-26.947-32.337-63.775c0-28.744,1.797-41.319,23.354-56.589 c0.898,0,0.898,0,0.898,0l8.312-7.034c28.39-21.649,59.578-45.143,72.53-54.047c14.372-9.881,26.049-11.677,33.235-6.288 c5.389,4.491,7.186,14.372,4.491,22.456c-0.537,1.289-1.197,2.701-1.96,4.211c-15.083,29.039-68.226,73.464-88.763,82.021 c-4.491,1.796-6.288,7.186-4.491,11.677c0.898,3.593,4.491,5.389,8.084,5.389c0.898,0,1.797,0,3.593-0.898 c11.717-5.208,32.24-19.851,51.844-37.445c4.192,4.502,9.407,7.363,14.626,9.599l1.797,0.898 c3.593,0.898,8.084,1.797,12.575,1.797c5.434,0,10.765-1.222,15.689-3.419c0.672,3.288,1.737,6.543,3.174,9.706 c5.389,9.881,13.474,17.067,23.354,20.66c4.491,0.898,8.982,1.797,13.474,1.797c6.288,0,12.576-1.796,17.067-3.593 c9.881-5.389,17.067-13.474,20.66-23.354l21.881-63.213c2.64,14.599,5.066,32.465,5.066,48.841 C386.246,394.228,385.347,401.414,361.095,433.751z"></path> </g> </g> </g></svg>`;
const gameOverText = document.querySelector("#gameOverText");

// Game
let options = ['rock', 'paper', 'scissor'];
let totalOptions = options.length;

overlay.style.display = 'none';

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
                    // return "You Lost the Round! Paper beats Rock";
                }
                else if (playerSelection == 1 && computerSelection == 2)
                {
                    roundWinnerScore[1]++;
                    // return "You Lost the Round! Scissor beats Paper";
                }
                else if (playerSelection == 2 && computerSelection == 0)
                {
                    roundWinnerScore[1]++;
                    // return "You Lost the Round! Rock beats Scissor";
                }
                else if (playerSelection == 1 && computerSelection == 0)
                    {
                    roundWinnerScore[0]++;
                    // return "You Won the Round! Paper beats Rock";
                }
                else if (playerSelection == 2 && computerSelection == 1)
                {
                    roundWinnerScore[0]++;
                    // return "You Won the Round! Scissor beats Paper";
                }
                else if (playerSelection == 0 && computerSelection == 2)
                {
                    roundWinnerScore[0]++;
                    // return "You Won the Round! Rock beats Scissor";
                }
                // else if (playerSelection == computerSelection)
                // {

                //     // return "Round Draw! You computerselectionh chose " + computerSelection;
                // }
                roundNumber++;


                switch(playerSelection)
                {
                    case 0:
                        playerChoiceDisplay.innerHTML = rockSign;
                        break;
                    case 1:
                        playerChoiceDisplay.innerHTML = paperSign;
                        break;
                    case 2:
                        playerChoiceDisplay.innerHTML = ScissorSign;
                        break;
                }

                switch(computerSelection)
                {
                    case 0:
                        computerChoiceDisplay.innerHTML = rockSign;
                        break;
                    case 1:
                        computerChoiceDisplay.innerHTML = paperSign;
                        break;
                    case 2:
                        computerChoiceDisplay.innerHTML = ScissorSign;
                        break;
                }
        }
        
        
        playerScore.innerText = roundWinnerScore[0];
        computerScore.innerText = roundWinnerScore[1];
    roundLabel.innerText = "Round " + roundNumber;
    
    if(roundWinnerScore[0] >= 5 || roundWinnerScore[1] >= 5)
        {
            // restartGame();
            // alert('game restarted');
            // gameOverModal.style.display = 'flex';
            overlay.style.display = 'flex';

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

function restartGame() {
    roundWinnerScore[0] = 0;
    roundWinnerScore[1] = 0;
    roundNumber = 0;
    playerScore.innerText = '?';
    computerScore.innerText = '?';
    roundLabel.innerText = 'Start';
    computerChoiceDisplay.innerHTML = '?';
    playerChoiceDisplay.innerHTML = '?';
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


// window.addEventListener('click', (e) => {
//     // restartGame();
//     // if(e.target == overlay) overlay.style.display = 'none';
//     console.log(e);
//     if(e.target == overlay || e.target == gameOverModalButton) overlay.style.display == 'none'; 
// });

overlay.addEventListener('click', (e) => {
    if (e.target == overlay) overlay.style.display = 'none';
    restartGame();
});

gameOverModalButton.addEventListener('click', (e) => {
    // gameOverModal.style.display = 'none'
    overlay.style.display = 'none';
    restartGame();
});