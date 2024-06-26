//returns computers choice of rock, paper, or scissors by picking a random number 0-2 and assigning a corresponding value to each option
function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if(num === 1){
        return "rock";
    }
    else if(num === 2){
        return "scissors";
    }
    else{
        return "paper";
    }
}

//gets player choice by accepting player input and validating it
function getPlayerChoice(){
    let correctInput = false;
    let input;
    let modifiedInput;
    while (!correctInput)
    {
        input = prompt("Enter rock, paper, or scissors -> ");
        modifiedInput = input.toLowerCase();
        if(modifiedInput === "rock" || modifiedInput === "paper" || modifiedInput === "scissors"){
            correctInput = true;
            return modifiedInput;
        }
        else{
            console.log("not valid input! Try entering \"rock\", \"paper\", or \"scissors\"!");

        }
    }
}

//compares choices and returns a winner by number -  1 is player, computer is 0, tie is 2
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors!")
        return 1;
    }
    else if (humanChoice === "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock!")
        return 0;
    }
    else if (humanChoice === "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper!")
        return 0;
    }
    else if (computerChoice === "rock" && humanChoice == "scissors"){
        console.log("You lose! Rock beats scissors!")
        return 0;
    }
    else if (computerChoice === "rock" && humanChoice == "paper"){
        console.log("You win! Paper beats rock!")
        return 1;
    }
    else if (computerChoice === "paper" && humanChoice == "scissors"){
        console.log("You win! Scissors beats paper!")
        return 1;
    }
    else{
        console.log("It's a tie!")
        return 2;
    }
}

//plays the game by calling playRound function 5 times, returns a winner based on ending score
function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice; 
    let computerChoice;
    let winner;

    for(i = 0; i<5; i++)
    {
        humanChoice = getPlayerChoice(); 
        computerChoice = getComputerChoice();
    
        console.log("Human Choice: " + humanChoice);
        console.log("Computer choice: " + computerChoice);
    
        winner = playRound(humanChoice, computerChoice);

        if (winner === 0){
            computerScore++;
        }
        else if (winner === 1){
            humanScore++;
        }
        else{
            computerScore++;
            humanScore++;
        }
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if(humanScore > computerScore){
        console.log("You win the game! Congrats!!")
    }
    else if (computerScore > humanScore){
        console.log("You lost the game. Better luck next time...");
    }
    else{
        console.log("You tied, good job ig?!")
    }
}

playGame();



