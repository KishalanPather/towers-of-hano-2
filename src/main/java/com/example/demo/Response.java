package com.example.demo;

//for the makeMove class to send Json data to the frontend
public class Response {
    public boolean validMove;
    public boolean gameCompleted;
    public int counter;

    public Response(){}

    public Response(boolean validMove){
        this.validMove = true;
    }
    
    public Response(boolean validMove, boolean gameCompleted, int counter){
        this.validMove = validMove;
        this.gameCompleted = gameCompleted;
        this.counter = counter;
    }
}
