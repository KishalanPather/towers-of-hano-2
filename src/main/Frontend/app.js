//DOM elements 
const startBtn = document.querySelector('.start');
const moveBtns = document.querySelector('.moveBtns');
const counter = document.querySelector('.counter');

//towers
let towers = []


startBtn.addEventListener('click', async () => {
  await startGame();
  towers = await getTowers();
  renderTowers(towers);
  moveBtns.style.display = "block";
  
  
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
  const response = await moveDisk(move);
  console.log("this is what is returns", response)
  towers = await getTowers();
  
  //update UI
  renderTowers(towers); 
  counter.innerHTML = `Counter ${response.message.counter}`;
  if (!response.message.validMove) alert("Invalid move: cannot put a bigger disk on top of a smaller disk.");
  if (response.message.gameCompleted) alert("Congratulations! You completed the game.")

});



//const towers = [
//    {
//      towerNumber: 0,
//      stack: [
//        { value: 3 },
//        { value: 2 },
//        { value: 1 },
//      ],
//    },
//    {
//      towerNumber: 1,
//      stack: [],
//    },
//    {
//      towerNumber: 2,
//      stack: [
//        {value: 3},
//      ],
//    },
//  ];
