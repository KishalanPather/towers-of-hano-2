
async function startGame(){
    const endpoint = "http://localhost:8080/game/start";
    const response = await fetch(endpoint,{method: "POST"})
    const text = await response.text();
    console.log(text);
}


const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
    console.log('clicked');
    startGame();
})