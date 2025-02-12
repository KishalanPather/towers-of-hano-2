const endpoint = "http://localhost:8080/game";

//API functions
async function startGame(disks){
    try{
        const response = await fetch(`${endpoint}/start`,{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify({"disks": disks}),
        
        })
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
          return response.json();
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

//container function for updating UI and moving disks in the backend
async function makeMove(move){
    const response = await moveDisk(move);
    towers = await getTowers();
    
    //update UI
    renderTowers(towers); 
    counter.innerHTML = `Counter: ${response.message.counter}`;
    if (!response.message.validMove) alert("Invalid move: cannot put a bigger disk on top of a smaller disk.");
    if (response.message.gameCompleted) alert("Congratulations! You completed the game.");
}

//function that pauses execution for some time
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
} 


//recursive solving function
async function solve(n,start,aux,end){
    if(n == 1){
        await makeMove(`${start}${end}`);
        await sleep(1000);      //pause to show the steps
        return "";              //stop execution
    }
    await solve(n-1,start,end,aux);
    await makeMove(`${start}${end}`);
    await sleep(1000);

    await solve(n-1,aux,start,end);

}