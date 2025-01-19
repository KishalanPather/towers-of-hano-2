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
