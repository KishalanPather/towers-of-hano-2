package com.example.demo;
public class Disk {
    private int value;

    public Disk(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
        
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "disk with value: " + this.value;
    }
}
