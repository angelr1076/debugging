
let gameOver = false;
//Declare input to define later in a function
let input;
let computerChoices = ["rock", "paper", "scissors"];
let computerChoice = randomFrom(computerChoices);
let restart = document.getElementById("restart");

//Changed Math.ceil to Math.floor in order to include the [0] index
function randomFrom(array) {
  return array[(Math.floor(Math.random() * 3))];
}

//Removed arguments as they are being called in their own functions
//Removed unnecessary while loop
function startGame() {
//Added input in order to change user input to lowercase characters
  input = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.").toLowerCase();
  checkInput();
}

//Fixed quit function by returning true
function checkInput() {
  if (input === "quit") {
    return true;
  } 


// Removed player input that only calls input of paper
if (computerChoice === "rock" && input === "scissors") {
    alert("Computer wins, it chose " + computerChoice);
    document.location.reload(true);
  } else if (computerChoice === "scissors" && input === "paper") {
    alert("Computer wins, it chose " + computerChoice);
    document.location.reload(true);
  } else if (computerChoice === "paper" && input === "rock") {
    alert("Computer wins, it chose " + computerChoice);
    document.location.reload(true);
//Added user outcomes since program results in the computer always winning
  } else if (computerChoice === "rock" && input === "paper") {
    alert("Player wins! Computer chose " + computerChoice);
    document.location.reload(true);
  } else if (computerChoice === "scissors" && input === "rock") {
    alert("Player wins! Computer chose " + computerChoice);
    document.location.reload(true);
  } else if (computerChoice === "paper" && input === "scissors") {
    alert("Player wins! Computer chose " + computerChoice);
    document.location.reload(true);
  } else if (computerChoice === input) {
    alert("we have a draw!");
    document.location.reload(true);
  } else {
    alert("Please enter: rock/paper/scissors or quit...");
    document.location.reload(true);
  }
}
startGame();
