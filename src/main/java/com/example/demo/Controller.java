package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
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
    

    @GetMapping("/status")
    public String getStatus(){
        return "Game is running";
    }

    @PostMapping("/move")
    public String makeMove(@RequestParam String move) {
        return game.makeMove(move);
    }
}
