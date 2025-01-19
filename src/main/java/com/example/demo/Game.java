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

    public synchronized String makeMove(String move) {
        if (!running) {
            return "Game is not running. Please start the game first.";
        }

        switch (move) {
            case "12":
                functionality.moveDisk(startTower, auxTower);
                return "Moved from start to aux";
                //break;
            case "23":
                functionality.moveDisk(auxTower, endTower);
                break;
            case "13":
                functionality.moveDisk(startTower, endTower);
                break;
            case "31":
                functionality.moveDisk(endTower, startTower);
                break;
            case "32":
                functionality.moveDisk(endTower, auxTower);
                break;
            case "21":
                functionality.moveDisk(auxTower, startTower);
                break;
            default:
                return "Invalid move. Use moves like '12', '13', etc.";
        }

        if (functionality.checkCompleted(endTower, numberOfDisks)) {
            this.running = false;
            return "Congratulations! You completed the game.";
        }

        return getGameState();
    }

    public synchronized String getGameState() {
        return String.format("startTower: %s\nauxTower: %s\nendTower: %s",
                startTower.getStack(), auxTower.getStack(), endTower.getStack());
    }
}