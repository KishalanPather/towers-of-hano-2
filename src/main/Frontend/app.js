////DOM elements 
//const startBtn = document.querySelector(".start");
//
//
////towers
//let towers = []
//
////start game 
//startBtn.addEventListener("click", () => {
//    startGame()
//    .then(async () => {
//        towers = await getTowers();
//    
//    });
//})


const towers = [
    {
      towerNumber: 0,
      stack: [
        { value: 3 },
        { value: 2 },
        { value: 1 },
      ],
    },
    {
      towerNumber: 1,
      stack: [],
    },
    {
      towerNumber: 2,
      stack: [
        {value: 3},
      ],
    },
  ];



  renderTowers(towers);