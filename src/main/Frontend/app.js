//DOM elements 
const startBtn = document.querySelector('.start');
const moveBtns = document.querySelector('.moveBtns');
const moveBtn = document.querySelector('.LM')

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

  await moveDisk(move);
  console.log("TIMEOUT");
  towers = await getTowers();
  renderTowers(towers);

  //setTimeout(async () => {
  //   towers = await getTowers();
  //   console.log("TIMEOUT");
  //   renderTowers(towers);
  //
  //},"3000");
});

//moveBtn.addEventListener('click',() => {
//  moveDisk("12");
//} )



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
