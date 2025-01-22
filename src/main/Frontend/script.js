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
    try{
        fetch(`${endpoint}/move`,{
            method: 'POST',
            body: JSON.stringify("12")
        })
        .then((res) => {
            if(res.ok){
                console.log("Disk moved!");
            }
        })

    } catch(err){
        console.log("Could not move disks. Error msg: ", err);
    }
    
}


//frontend functions
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