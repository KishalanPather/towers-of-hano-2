const endpoint = "http://localhost:8080/game";

//API functions
async function startGame(){
    try{
        const response = await fetch(`${endpoint}/start`,{method: "POST"})
        const text = await response.text();
        console.log(text);
    } catch(err){
        console.log("Could not start game. Error msg: ", err);
    }
}

async function getTowers(){
    try{
        const response = await fetch(`${endpoint}/towers`);
        const object = await response.json();
        console.log(object);
        return object;
    } catch(err){
        console.log("Could not get towers. Error msg: ", err);
    }
    
}

async function moveDisk(move){
    try {
        const response = await fetch(`${endpoint}/move`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({"move": move}),
        });
    
        if (response.ok) {
          console.log("Disk moved!");
          return response;
        } else {
          console.error("Failed to move disk. Status:", response.status);
          throw new Error(`Move failed with status ${response.status}`);
        }
      } catch (err) {
        console.error("Could not move disk. Error:", err);
        throw err; // Re-throw error so the caller can handle it
      }
}


//frontend functions
function renderTowers(towerData) {
    const towerContainer = document.getElementById('towerContainer');
    towerContainer.innerHTML = "";
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