# towers-of-hanoi-2
This app is based off the towers of Hanoi game. The goal is to move all the disks from the start tower(left) to the end tower(right) without placing a larger disk on top of a smaller disk.
You can select up to 10 disks and move them from tower to tower. A counter at the top counts your moves.
You can click the solve button to allow a recursive algorithm to solve it for you.
 
# Why?
We learnt about this game in my theory of algorithms course in computer science and thought it would be a pretty cool game to make with a built in solving function that completes the game for you. 


# How it works
The app is created using Java springboot and a javascript frontend.

## Explanation of classes and files
Backend:
 - Tower.java, Disk.java: Tower objects store disk objects in a linkedlist.
 - Functionality.java: contains utility functions that to move disks from tower object array to another, check if a valid move is made, or check if the game is completed.
 - Response.java: used for storing what the frontend sends as JSON.
 - Game.java: creates the tower and disk objects, counts the moves made, starts the game, and allows for moves to be made.
 - Controller.java: Creates the game object and contains a Rest API for communicating with the frontend.
 - TowersOfHanoiProjectApplication.java: springboot made file that starts the program.

Frontend:
- index.html
- styles.css
- script.js: contains functions to communicate and send data to the backend as well as functions to render the UI and the solving algorithm.
- app.js: calls the functions in script.js when the buttons in the frontend are clicked.

# How to run
- Simply run the java application: TowersOfHanoiProjectApplication.java.
- Run index.html in the browser.
- Done.
