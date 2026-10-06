//Estados
let humanScore = 0;
let computerScore = 0;

//---DOM References---
const humanScoreEl = document.getElementById('human-score');
const computerScoreEl = document.getElementById('computer-score');
const raundResultEl = document.getElementById('round-result');
const roundDetaiEl = document.getElementById('round-detail');
const gameOverEl = document.getElementById('game-over');
const gameOverTextEl = document.getElementById('game-over-text');
const buttons = document.getElementById('.choice-btn');

//---Core Logic---
function getComputerChoice(){
    const num = Math.floor(Math.random()*3)+1;
    if(num === 1) return 'rock';
    if(num === 2) return 'paper';
    return 'scissors';
}
function playRaund(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'draw';
    }else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        humanScore++;
        return 'human';
    }else{
        computerScore++;
        return 'computer';
    }
}

const EMOJI_MAP = {rock:'🥌', paper: '📄', scissors:'✂️'}

//--- UI Update ---
function updateScore(){
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
}

function showRoundResult(winnwe, humanChoice, computerChoice){
    const hEmoji = EMOJI_MAP(humanChoice);
    const cEmoji = EMOJI_MAP(computerChoice);

    roundDetaiEl.textContent = `${hEmoji} ${humanChoice} vs ${cEmoji} ${computerChoice}`;
}