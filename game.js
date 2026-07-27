let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorepara=  document.querySelector("#user-score");
const computerScorepara=  document.querySelector("#computer-score");

const gencompchoice =() =>{
    const optoins= ["Rock","paper","scissor"];
    //rock,paper,scissor
     const randIdx=Math.floor(Math.random()*3);
     return optoins[randIdx];
}

const drawGame= () =>{
    
    msg.innerText=" Game was darw , play again";
    msg.style.backgroundColor="violet";
}

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        
        msg.innerText=`You win!😙 ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="pink";
    }
    else{
        computerScore++;
        computerScorepara.innerText=computerScore;
        
        msg.innerText=`You lose 😫 ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice) => {
   console.log("user choice is", userchoice);
  //generate computer choice ->modular;
  const compchoice= gencompchoice();
  console.log("computer choice is", compchoice)

  if(userchoice===compchoice){
    //draw 
    drawGame()
}
else{
    let userwin= true;
    if (userchoice=== "rock"){
         userwin= compchoice==="paper"? false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissor"?false:true;

    }
    else{
        userwin= compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice)
}
};

choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id")
      
      playGame(userchoice)
    })
})