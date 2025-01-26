package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping("/game")
@CrossOrigin(origins = "http://127.0.0.1:5500") // Allow specific origin
public class Controller {

    private Game game = new Game();

    @PostMapping("/start")
    public String startGame() {
        try {
            game.startGame();
            return "Game started successfully!";
        } catch (IllegalStateException e) {
            return e.getMessage();
        }
    }
    
    @GetMapping("/towers")
    public Tower[] getTowers() {
        if(game.running){
            Tower[] towers = {game.startTower,game.auxTower,game.endTower};
            return towers;
        }
        Tower[] towers = {};
        return towers;
    }
    

    @GetMapping("/status")
    public String getStatus(){
        return "Game is running";
    }

    @PostMapping("/move")
    public ResponseEntity<JsonNode> makeMove(@RequestBody JsonNode requestData) {
        String move = requestData.get("move").asText();
        Response response = game.makeMove(move);
        
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode message = objectMapper.createObjectNode()
	        .set("message", objectMapper.valueToTree(response));
	        
	        return ResponseEntity.ok(message);
    }
}
