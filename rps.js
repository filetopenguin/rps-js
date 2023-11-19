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

function playRound(player,computer){
    player.toLowerCase;
    computer.toLowerCase;
    console.log("pc chose " + computer)
    if(player=="rock" && computer == "scissors"){
        return "player won"
    }
    if(player=="scissors" && computer=="rock"){
        return "pc won"
    }
    if(player=="paper" && computer =="scissors"){
        return "pc won"
    }
    if(player == "scissors" && computer=="paper"){
        return "player won"
    }
    if(player=="paper" && computer =="rock"){
        return "player won"
    }
    if(player=="rock" && computer == "paper"){
        return "pc won"
    }
    if(player==computer){
        return "tie"
    }
}

const player = getPlayerChoice();
const pc = getComputerChoice();
console.log(playRound(player,pc));