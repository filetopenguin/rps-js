function getComputerChoice(){
    let p = Math.floor(Math.random() * (3-1) +1);
    switch(p){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
        default:
            console.log("ERROR");
    }
}
function getPlayerChoice(){
    return prompt("enter a move");
}
let playerScore =0;
let pcScore=0;

function playRound(player,computer){
    player.toLowerCase;
    computer.toLowerCase;
    console.log("pc chose " + computer)
   if(playerScore > 4 || pcScore>4){
    if(playerScore>pcScore){
        const winner = "player";
    }
    else{winner = "pc"}
    playerScore =0;
    pcScore=0;
    msg.textContent="game over " +winner + " won";
   }
    if(player=="rock" && computer == "scissors" ||
    player == "scissors" && computer=="paper" ||
    player=="paper" && computer =="rock"){
        playerScore++;
        results.innerHTML =   "Currently: " + pcScore + " " + playerScore;

        return "player won"
    }
  
    if(player=="scissors" && computer=="rock" ||
    player=="paper" && computer =="scissors"||
    player=="rock" && computer == "paper"){
        pcScore++;
        results.innerHTML =   "Currently: " + pcScore + " " + playerScore;

        return "pc won"
    }
   
    if(player==computer){
        return "tie"
    }

}




const rock = document.querySelector("#rock");
rock.addEventListener=('click',function(){
    score.textContent=(playRound("rock",getComputerChoice()));
});

const paper = document.querySelector("#paper");
paper.addEventListener('click',function(){
    score.textContent=(playRound("paper",getComputerChoice()));
});

const scissors= document.querySelector("#scissors");
scissors.addEventListener('click',function(){
    score.textContent= (playRound("scissors",getComputerChoice()));
});

const results = document.querySelector('#results');

const msg = document.querySelector('#msg');

const score = document.createElement('p');
score.classList.add('score');
msg.appendChild(score);

