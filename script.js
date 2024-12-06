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

// console.log(getComputerChoice());

function getHumanChoice () {
    let answer = prompt("Rock, paper, scissor?")
    return answer.toLowerCase()
}

// console.log(getHumanChoice())


let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == computerChoice){
        console.log("Stalemate, buddy!")
    }
    else if(humanChoice == "scissor" && computerChoice == "rock"){
        ++computerScore;
        console.log("Sorry, you lost. Rock crushes scissors")
    }
    else if(humanChoice == "scissor" && computerChoice == "paper"){
        ++humanScore;
        console.log("You win! Scissor cuts paper.")
    }
    else if(humanChoice=="rock" && computerChoice == "scissor"){
        ++humanScore;
        console.log("You win! Rock smashes scissor.")
    }

    else if (humanChoice == "rock" && computerChoice == "paper"){
        ++computerScore;
        console.log("You lose! Paper shushes rock.")
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log("You win! Paper suffocates rock, huh.")
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        ++computerScore;
        console.log("You lose! Snip, snip the paper.")

    }
    else {
        console.log("Try again.")
    }


  }
  
//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice();
  
//   playRound(humanSelection, computerSelection);
  


  function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); 

    let a = getHumanChoice();
    let b = getComputerChoice();  
    playRound(a, b);

    let c = getHumanChoice();
    let d = getComputerChoice();  
    playRound(c, d);

    let e = getHumanChoice();
    let f = getComputerChoice();  
    playRound(e, f);

    let g = getHumanChoice();
    let h = getComputerChoice();  
    playRound(g, h);

    score = "Score\n" +
        "You:"+humanScore+"\n"+
        "PC:"+computerScore

    if (humanScore>computerScore){
        console.log(score+"Congrats! You win!")
    }
    else if (computerScore>humanScore){
        console.log(score+"Dang. You lost! Better luck next time.")
    }
    else if(humanScore==computerScore){
        console.log(score+"That's a close one. Play again.")
    }

    
  }

  playGame();


//   pausing and creating pseudocode- drawing input to playRound clarified what to do