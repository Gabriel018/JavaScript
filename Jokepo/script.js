const userchoiceDisplay = document.getElementById('userchoice')
const computerchoiceDisplay = document.getElementById('computerchoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices =>  possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userchoiceDisplay.innerHTML = userChoice
    randomComputerChoice()
    Result()
}));


function randomComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1 

    if (randomChoice === 1) {
        computerChoice = 'pedra'
    } else if (randomChoice === 2) {    
        computerChoice = 'papel'
    } else {
        computerChoice = 'tesoura'
    }
    computerchoiceDisplay.innerHTML = computerChoice
}

function Result() {     
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = 'Empate'

    } else if (userChoice === 'pedra' && computerChoice === 'tesoura') {
        resultDisplay.innerHTML = 'Você venceu'
    } else if (userChoice === 'pedra' && computerChoice === 'papel') {
        resultDisplay.innerHTML = 'Você perdeu'
    } else if (userChoice === 'papel' && computerChoice === 'pedra') {
        resultDisplay.innerHTML = 'Você venceu'
    } else if (userChoice === 'papel' && computerChoice === 'tesoura') {
        resultDisplay.innerHTML = 'Você perdeu'
    } else if (userChoice === 'tesoura' && computerChoice === 'pedra') {
        resultDisplay.innerHTML = 'Você perdeu'
    } else if (userChoice === 'tesoura' && computerChoice === 'papel') {
        resultDisplay.innerHTML = 'Você venceu'
    }       
}


