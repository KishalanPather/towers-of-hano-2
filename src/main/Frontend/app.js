//DOM elements 
const startBtn = document.querySelector('.start');
const moveBtn = document.querySelector('.LM')

//towers
let towers = []

window.addEventListener('load',async () => {
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

moveBtn.addEventListener('click',() => {
  moveDisk("12");
} )



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
