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