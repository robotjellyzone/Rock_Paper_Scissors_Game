let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); // here, p is a paragraph tag inside result
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's']
  const randomNumbers = Math.floor(Math.random()*3);   /* For making choices between 0 and 3  for example if want to go for choices between 0 and 10 just multiply by 10*/
  return choices[randomNumbers];
}
 /*console.log(getComputerChoice());*/

function convertToWord(letter){
  if(letter == "r") return "Rock";
  if(letter == "s") return "Scissors";
  return "Paper";
}
//classList gives array of all classes
function win(userChoice, computerChoice){
  userScore++;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win!! :fire" --> for string mostly use below convertToWord
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! 🔥`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300) //this 300 is in millisecond & clasList gives a list of array
}
function lose(userChoice, computerChoice){
  computerScore++;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost...! 🤦‍`;
  userChoice_div.classList.add('red-glow');
  //setTimeout(function(){ userChoice_div.classList.remove('red-glow')  }, 1000)  done using different method ie using '=>' for function
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}
function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallUserWord} equals ${convertToWord(userChoice)}${smallCompWord}. It's a Draw!! 🤷`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)
}
function game(userChoice){
const computerChoice = getComputerChoice();
/*console.log("user choice --> " + userChoice);
console.log("computer choice --> " + computerChoice);*/
switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
     /*console.log("User Wins!!");*/
     win(userChoice, computerChoice);
     break;
  case "rp":
  case "ps":
  case "sr":
     /*console.log("User Loses!!");*/
     lose(userChoice, computerChoice);
     break;
  case "rr":
  case "pp":
  case "ss":
     /*console.log("It's a Draw!!");*/
     draw(userChoice, computerChoice);
     break;
   }
}

function main(){
  /*rock_div.addEventListener('click', function(){
  //console.log("Hi! You Clicked On Rock");
  game("r");
  })
  paper_div.addEventListener('click', function(){
  //console.log("Hi! You Clicked On Paper");
  game("p");
  })
  scissors_div.addEventListener('click', function(){
  //console.log("Hi! You Clicked On Scissors");
  game("s");
  })*/
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}
main();
