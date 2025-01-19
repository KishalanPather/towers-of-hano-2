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

  function renderTowers(towerData) {
    const towerContainer = document.getElementById('towerContainer');

    towerData.forEach(tower => {
      const towerElement = document.createElement('div');
      towerElement.classList.add('tower');

      const prongElement = document.createElement('div');
      prongElement.classList.add('prong');

      const baseElement = document.createElement('div');
      baseElement.classList.add('base');

      towerElement.appendChild(prongElement);

      // Add disks to the tower
      tower.stack.reverse().forEach(disk => {
        const diskElement = document.createElement('div');
        diskElement.classList.add('disk');
        diskElement.setAttribute('data-value', disk.value);
        diskElement.textContent = disk.value;
        towerElement.appendChild(diskElement);
      });

      towerElement.appendChild(baseElement);
      towerContainer.appendChild(towerElement);
    });
  }

  renderTowers(towers);