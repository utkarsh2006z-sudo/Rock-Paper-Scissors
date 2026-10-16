const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let user_sc = document.querySelector("#user-score");
let comp_sc = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;

const showWinner = (userWin,userChoice,compChoice)=>{

    if(userWin){
        msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor  = "green";
        userScore++;
        user_sc.innerText = userScore;

    }else{
        msg.innerText = `You Lose computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor  = "red";
        compScore++;
        comp_sc.innerText = compScore;
    }

}

const random = (userChoice)=>{
    console.log("user choice = ", userChoice);
    let compChoice = gencompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice===compChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice==="paper" ?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice==="rock"?true:false;
        }else{
            userWin = compChoice==="rock"?false:true;
        }showWinner(userWin,userChoice,compChoice);
    }

}

const drawgame = ()=>{
   msg.innerText = "its a Draw!!";
   msg.style.backgroundColor  = "#081b31";
}

const gencompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

choices.forEach((choice) =>{ 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        random(userChoice);


    });
});


resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    user_sc.innerText = 0;
    comp_sc.innerText = 0;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});