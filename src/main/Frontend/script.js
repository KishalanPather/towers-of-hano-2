const endpoint = "http://localhost:8080/game/start";

async function startGame(){
    try{
        const response = await fetch(endpoint,{method: "POST"})
        const text = await response.text();
        console.log(text);
    } catch(err){
        console.log("Could not start game. Error msg: ", err);
    }
}

async function getTowers(){
    try{
        const response = await fetch(endpoint);
        const object = await response.json();
        console.log(object)
        return object;
    } catch(err){
        console.log("Could not get towers. Error msg: ", err);
    }
}


async function moveDisk(move){
    const response = await fetch(endpoint,{
        method: 'POST',
        body: JSON.stringify(move)
    })
}



function renderTowers(towerData) {
    const towerContainer = document.getElementById('towerContainer');

    towerData.forEach(tower => {
      const towerElement = document.createElement('div');
      towerElement.classList.add('tower');

      const prongElement = document.createElement('div');
      prongElement.classList.add('prong');

      
      towerElement.appendChild(prongElement);

      // Add disks to the tower
      tower.stack.reverse().forEach(disk => {
        const diskElement = document.createElement('div');
        diskElement.classList.add('disk');
        diskElement.setAttribute('data-value', disk.value);
        diskElement.textContent = disk.value;
        towerElement.appendChild(diskElement);
      });

      towerContainer.appendChild(towerElement);
    });
  }