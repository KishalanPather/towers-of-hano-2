//DOM elements 
const startBtn = document.querySelector(".start");

//towers
let towers = []


startBtn.addEventListener("click", async () => {
  await startGame();
  towers = await getTowers();
  renderTowers(towers);
  
  
})



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
