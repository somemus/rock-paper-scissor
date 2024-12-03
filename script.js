function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice (){
    let choice = getRandomInt(3);
    switch(choice) {
        case '0':
            return('scissor')
        case '1':
            return('rock')
        case '2':
            return('paper')
    }
      
}

console.log(getComputerChoice());