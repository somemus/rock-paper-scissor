function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice (){
    
    let choice = console.log(getRandomInt(3));
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
console.log(getRandomInt(3));