async function startGame(){
    const endpoint = "http://localhost:8080/game/start";
    const response = await fetch(endpoint,{method: "POST"})
    const text = await response.text();
    console.log(text);
}

async function getTowers(){
    const endpoint = "http://localhost:8080/game/towers";
    const response = await fetch(endpoint);
    const object = await response.json();
    console.log(object)
    return object;
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