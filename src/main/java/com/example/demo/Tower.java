package com.example.demo;
import java.util.LinkedList;

public class Tower {
    private int towerNumber;
    private LinkedList<Disk> stack;

    public Tower(int towerNumber){
        this.towerNumber = towerNumber;
        this.stack = new LinkedList<Disk>();
    }

    public int getTowerNumber(){
        return this.towerNumber;
    }

    public LinkedList<Disk> getStack(){
        return this.stack;
    }

    public void addToStack(Disk disk){
        this.stack.addLast(disk);
    }

    public void removeFromStack(){
        this.stack.removeLast();
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Tower: " + this.towerNumber;
    }
}
