let gameSeq=[];
let userSeq=[];

let started=false;  //game not started yet
let level=0;
highestLevel=0;

let h3=document.querySelector("h3");
let btns=["yellow","red","green","purple"];

//to start the game
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
   
})

//flash when game flash
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

//flash when user click
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}


//level up and choose random color
function levelup(){
    userSeq=[];//after each level userseq ko khali karna hoga
   level++;
   h3.innerText=`level ${level}`;

   //generate random color
   let randomInd=Math.floor(Math.random()*4);
   let randomColor=btns[randomInd];
   let randomBtn=document.querySelector(`.${randomColor}`);
   console.log(randomColor);
   gameSeq.push(randomColor);
   console.log(gameSeq);
   gameflash(randomBtn);
}


function matchSeq(ind){
    if(userSeq[ind]==gameSeq[ind]){
     if(userSeq.length==gameSeq.length){
        setTimeout(levelup,500);
     }
    }
    else{
        //to track highest score
        if(highestLevel<level){
            highestLevel=level;
        }
        gameOver(); //for that red color 
        h3.innerHTML=`Game Over! your score is  <b>${level}</b> and your highest score is ${highestLevel} .<br>please enter any key to restart game..`;
        //for reset the game
        reset();
        
    }
}

//what happen when we press any button--1.that flash 2. match seq
function btnPress(){
   userSeq.push(this.classList[1]);
   console.log(userSeq);
   let btn=this;
   userflash(btn);

   matchSeq(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

//for reset the game after game over
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


function gameOver(){
    let body=document.querySelector("body");
    body.classList.add("over");
    setTimeout(function(){
        body.classList.remove("over")
    },150);

}





