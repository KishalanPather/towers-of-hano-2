package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class Game {
    public Tower startTower;
    public Tower auxTower;
    public Tower endTower;
    public Functionality functionality;
    public int numberOfDisks;
    public boolean running;
    public int counter = 0;

    public Game() {
        // Initialize game variables
        this.startTower = new Tower(0);
        this.auxTower = new Tower(1);
        this.endTower = new Tower(2);
        this.functionality = new Functionality();
        this.numberOfDisks = 3; // Default number of disks
        this.running = false;
    }

    public synchronized void startGame() {
        if (running) {
            throw new IllegalStateException("Game is already running!");
        }
        // Reset towers and initialize the game
        this.startTower = new Tower(0);
        this.auxTower = new Tower(1);
        this.endTower = new Tower(2);

        for (int i = 0; i < numberOfDisks; i++) {
            int diskValue = numberOfDisks - i;
            Disk disk = new Disk(diskValue);
            startTower.addToStack(disk);
        }

        this.running = true;
    }

    public synchronized void stopGame() {
        this.running = false;
    }

    public synchronized Response makeMove(String move) {
        Response response;

        if (!running) {
            System.out.println("Game is not running. Please start the game first.");
        }

        //first assign if it was a valid move to response
        switch (move) {
            case "12":
                response = functionality.moveDisk(startTower, auxTower);
                break;
            case "23":
                response = functionality.moveDisk(auxTower, endTower);
                break;
            case "13":
                response = functionality.moveDisk(startTower, endTower);
                break;
            case "31":
                response = functionality.moveDisk(endTower, startTower);
                break;
            case "32":
                response = functionality.moveDisk(endTower, auxTower);
                break;
            case "21":
                response = functionality.moveDisk(auxTower, startTower);
                break;
            default:
                response = new Response(false,false,0);
                return response;
        }

        //then assign if the game was completed in response
        if (functionality.checkCompleted(endTower, numberOfDisks)) {
            this.running = false;
            response.gameCompleted = true;
            System.out.println("Congratulations! You completed the game.");
        } else{
            response.gameCompleted = false;
        }

        // check if we can increment the counter to response
        if(response.validMove){
            counter++;
        }
        response.counter = counter; //finally, assign the counter to response
        return response;
    }

    public synchronized String getGameState() {
        return String.format("startTower: %s\nauxTower: %s\nendTower: %s",
                startTower.getStack(), auxTower.getStack(), endTower.getStack());
    }
}