var choices = document.querySelectorAll(".choice");
var restart= document.getElementById("restart");
var score=document.getElementsByClassName("score");
var model= document.querySelector(".model");
var result= document.getElementById("result");
var playerDisplay = document.getElementById("player");
var computerDisplay = document.getElementById("computer");

const scoreBoard={
    player:0,
    computer:0
};


choices.forEach(choice => choice.addEventListener("click",function play(choice){
    // console.log("Play fn called");
    restart.style.display="inline-block";
    const playerChoice=choice.target.id;
    const computerChoice= getComputerChoice();
    // console.log(playerChoice,computerChoice);
    const winner= getWinner(playerChoice,computerChoice);
    // console.log(playerChoice,computerChoice,winner);
    showWinner(winner,computerChoice);
}));
window.addEventListener('click',refresh);

//Function refersh
function refresh(e)
{
if(e.target == model)
{
    model.style.display="none";
}
}
//Get Computer Choice
function getComputerChoice()
{
    var random= Math.random();
    // console.log(random);
    if(random<0.4){
        return 'rock';
    }
    else if(random<=0.7){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//Get the Winner
function getWinner(p , c){
    if(p === c){
        return 'draw';
    }
    else if(p === 'paper'){
        if(c === 'rock'){
            return 'player';
        }else{
            return 'computer';
        }
    }
    else if(p === 'scissors'){
        if(c === 'paper'){
            return 'player';
        }else{
            return 'computer';
        }
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }
}
//To display the Winner
function showWinner(winner,computerChoice){
    if(winner === 'player'){
        scoreBoard.player++;
        playerDisplay.textContent=scoreBoard.player;
        result.innerHTML=`<h1 class="win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fas fa-10x " ></i>
        <p id="display">Computer Chose ${computerChoice}</p>`;
    }
    else if(winner === 'computer')
    {
        scoreBoard.computer++;
        computerDisplay.textContent=scoreBoard.computer;
        result.innerHTML=`<h1 class="lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fas fa-10x"></i>
        <p id="display">Computer Chose ${computerChoice}</p>
        `;
    }
    else{
        result.innerHTML=`<h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fas fa-10x"></i>
        <p id="display">Computer Chose ${computerChoice}</p>
        `;
    }
    //Show the score
    // score.innerHTML=`
    // <p>Player:${scoreBoard.player}</p>
    // <p>Computer:${scoreBoard.computer}</p>
    // `;

    model.style.display="block";
}