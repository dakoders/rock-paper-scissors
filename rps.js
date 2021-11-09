// Computer's Rock Paper Scissors
function computerPlay() {
    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItem;
};

// function winningPlayer() {
//     if (playerScore > computerScore) {
//         console.log("Player wins!!")
//     } else if (playerScore < computerScore){
//        console.log("Computer wins!!")
//     } else {
//         console.log("It's a draw! Try again!")
//     } 
// }
// create play round function
let playerScore = 0;
let computerScore = 0; 
function game() {
    let i = 0;
     do {
i += 1;
function playRound(playerSelection, computerSelection) {

if (playerSelection == "rock" && computerSelection == "Paper") {
    computerScore++;
    result = "You lose! Paper beats rock!";
    
} else if (playerSelection == "rock" && computerSelection == "Scissors") {
    playerScore++;
    result = "You win! Rock beats scissors!";

} else if (playerSelection == "paper" && computerSelection == "Scissors") {
    computerScore++;
    result = "You lose! Scissors beats paper!";
    
} else if (playerSelection == "paper" && computerSelection == "Rock") {
    playerScore++;
    result = "You win! Paper beats rock!";
    
} else if (playerSelection == "scissors" && computerSelection == "Rock"){
    computerScore++;
    result = "You lose! Rock beats scissors!";
   
} else if (playerSelection == "scissors" && computerSelection == "Paper"){
    playerScore++;
    result = "You win! Scissors beats paper!";

} else {
    result = "Tie! Try again!";
}
return result;
};

const playerSelection = prompt('Rock, Paper, or Scissors?');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
} while (i < 5);

if (playerScore > computerScore) {
    console.log("Player wins!! " + "Player score = " + playerScore + " Computer Score = " + computerScore)
} else if (playerScore < computerScore){
   console.log("Computer wins!! " + "Player score = " + playerScore + " Computer Score = " + computerScore)
} else {
    console.log("It's a draw! Try again!")
} 

// for loop to keep looping through the gamepl
   let replay = prompt("Do you want to play again?"); 
   if (replay === "yes") {
    playerScore = 0;
    computerScore = 0; 
    i = 0;
    game();
   } else {
       console.log ("Thanks for playing!!")
   }
    
};

game();
//prompt user for their input

//log results for each round and the winner