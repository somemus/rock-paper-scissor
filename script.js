function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice (){
    
    let choice = getRandomInt(3);
    switch(choice) {
        case 0:
            return('scissor')
            break;
        case 1:
            return('rock')
            break;
        case 2:
            return('paper')
            break;
    }
      
}

console.log(getComputerChoice());

function getHumanChoice () {
    let answer = prompt("Rock, paper, scissor?")
    return answer.toLowerCase()
}

console.log(getHumanChoice())


let humanScore = 0;
let computerScore = 0;


let a = getComputerChoice();
let b = getHumanChoice();

function playRound(a,b) {
    

    if (a == b){
        // repeat game
        return "ok"
    }

    else if(a == rock && b == scissor){
    +computerScore;
    return "Sorry, you lost."
    }
}