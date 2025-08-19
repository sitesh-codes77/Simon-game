let gamesq = [];
let usersq = [];
let btns = ["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function () {
   if(started == false){
    console.log("game is stared");
    started = true;
    levelup();
   }
   });
   function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
   };

   function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    },250);
   };

   function levelup(){
    usersq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor =btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(ranColor);
    // console.log(randbtn);
    // console.log(randIdx);
    gamesq.push(randColor)
    gameFlash(randbtn);
   };

   function checkAnswer (idx){
    // console.log("curr level ",level);
    // let idx = level -1;
    if(usersq[idx] === gamesq[idx]){
        if(usersq.length == gamesq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game over.....!<b>Score ${level} </b> <br>Start again by click any key.`
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 1000);
        reset();
    }
   }

   function btnPress (){
    //    console.log(this);
       let btn = this;
       userFlash(btn);
       userColor = btn.getAttribute("id");
       usersq.push(userColor);
       checkAnswer(usersq.length-1);
    }
    let allBtns =  document.querySelectorAll(".btn");
    for (btn of allBtns){
        btn.addEventListener("click",btnPress);
    }

    function reset(){
        started = false;
        gamesq = [];
        usersq = [];
        level = 0;
    }
