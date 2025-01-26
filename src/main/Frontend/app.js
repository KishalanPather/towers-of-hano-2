//DOM elements 
const startBtn = document.querySelector('.start');
const moveBtns = document.querySelector('.moveBtns');
const counter = document.querySelector('.counter');

//towers
let towers = []

window.addEventListener('load', async () => {
  try{
    towers = await getTowers();
    if(towers){
    renderTowers(towers);
  }
  }catch(err){
    console.log("towers couldn't be fetched on load. server not online? Error msg: ", err)
  }
})

startBtn.addEventListener('click', async () => {
  await startGame();
  towers = await getTowers();
  renderTowers(towers);
  
  
})

moveBtns.addEventListener('click', async (e) => {
  let move;
  //determine which towers the user wants to move disks to and from
  if(e.target.matches('.LM')){
    console.log('12');
    move = '12';
  } else if(e.target.matches('.LR')){
    console.log('13');
    move  = "13"
  }else if(e.target.matches('.ML')){
    console.log('21');
    move  = "21";
  }else if(e.target.matches('.MR')){
    console.log('23');
    move  = "23";
  }else if(e.target.matches('.RL')){
    console.log('31');
    move  = "31";
  }else if(e.target.matches('.RM')){
    console.log('32');
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
