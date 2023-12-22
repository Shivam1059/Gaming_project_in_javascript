let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};
   const drawGame = () => {
  //  console.log("game was drow.");
   msg.innerText = "Game was Drow.Play again.";
   msg.style.backgroundColor = "#081b31";
 };

 const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you win!");
    msg.innerText="You win!" ;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("you lose");
    msg.innerText = "You lose." ;
    msg.style.backgroundColor = "red";
  }
 };

const playGame = (userChoice) => {
  console.log("user choice  = ", userChoice);
  const  compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

   if(userChoice === compChoice) {
     //Drow Game
     drawGame();
     }else{
      let userWin = true;
    if(userChoice === "rock") {
     compChoice === "paper" ? false : true;
     }else if(userChoice === "paper"){
      userChoice =  compChoice === "scisers"? false : true;
     }else {
      compChoice === "rock"? false : true;
     }
     showWinner(userWin,userChoice,compChoice);
   } 
};

choices.forEach((choice) =>{
  console.log( choice);
  choice.addEventListener("click",() =>{
    const userchoice = choice.getAttribute("id")
    console.log("choice was clicked",userchoice);
    playGame(userchoice)
  });

});