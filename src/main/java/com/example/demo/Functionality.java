package com.example.demo;

public  class Functionality {
    public Functionality(){}

    public Response moveDisk(Tower startTower, Tower endTower){
       Disk disk = startTower.getStack().getLast(); //store last disk
       Response response;

       if(checkValidMove(disk, endTower)){  
        startTower.removeFromStack();                //remove from start tower
        endTower.addToStack(disk);                  //place on endtower
        response = new Response(true);              //sets valid move in response to true
        return response;
       } else{
        System.out.println("Invalid move: cannot put a bigger disk on top of a smaller disk.");
         response = new Response(false);            //sets valid move in response to false
         return response;
       }

    }

    //check tower's array and compare if the last disk works 
    public  Boolean checkValidMove(Disk disk, Tower tower){   //disk we trying to add, tower the disk is going to
        int stackSize = tower.getStack().size();        //to check if theres any disks on the tower already
        if(stackSize > 0){
            Disk lastDisk = tower.getStack().getLast();     //last disk on tower we are trying to move to
            if(disk.getValue() < lastDisk.getValue()){
                return true;
            }
            return false;
        }
        return true; 
    }

    //checks if the game is won
    public Boolean checkCompleted(Tower lastTower, int numberOfDisks){
        //check last tower's array
        // if the length of the linkedList is equal to the number of disks, then the game is won
        int lastTowerStackSize = lastTower.getStack().size();
        if(lastTowerStackSize == numberOfDisks){
            System.out.println("Congratulations, You solved it!");
            return true;
        }
        return false;
    }
}
