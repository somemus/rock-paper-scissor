
function getComputerChoice (){
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case '0':
            return('scissor')
        case '1':
            return('rock')
        case '2':
            return('paper')
    }
   

   
}

b = getComputerChoice()
console.log(b)