//DOM elements 
const diskCount = document.querySelector('#diskCount')
const startBtn = document.querySelector('.start');
const moveBtns = document.querySelector('.moveBtns');
const counter = document.querySelector('.counter');
const solveBtn = document.querySelector('.solve');

//towers
let towers = [];
let numberOfDisks;


startBtn.addEventListener('click', async () => {
  numberOfDisks = diskCount.value;
  await startGame(numberOfDisks);
  towers = await getTowers();
  renderTowers(towers);
  moveBtns.style.display = "block";
  counter.innerHTML = "Counter: 0"
  
  
})

moveBtns.addEventListener('click', async (e) => {
  let move;
  //determine which towers the user wants to move disks to and from
  if(e.target.matches('.LM')){
    move = '12';      //1 = left, 2 = middle, 3 = right
  } else if(e.target.matches('.LR')){
    move  = "13"
  }else if(e.target.matches('.ML')){
    move  = "21";
  }else if(e.target.matches('.MR')){
    move  = "23";
  }else if(e.target.matches('.RL')){
    move  = "31";
  }else if(e.target.matches('.RM')){
    move  = "32";
  }

  //make the move
  makeMove(move);

});


solveBtn.addEventListener('click', () => {
  solve(numberOfDisks,"1","2","3");
})


