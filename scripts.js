let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializerBtn = document.createElement('button');
initializerBtn.innerText = 'Click this Button to Start a New Game!';
document.getElementById('game-over-lbl').appendChild(initializerBtn);
initializerBtn.addEventListener('click', (initialEvent) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerIndicator = document.querySelector('b')
let playerText = 'Next Player: ';
playerIndicator.innerText = playerText;//says the next player is the player indicated by nextPlayer

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{   // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++) {//for each cell
        let cellID = 'c' + (i+1);//ID for a cell
        var newBtn = document.createElement('button');//creates a new button in the specified cell
        document.getElementById(cellID).appendChild(newBtn);//gives the cell a button
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{   /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    if (event.target.innerText !== 'Click this Button to Start a New Game!') {//for every button that isn't the initializer button
        event.target.innerText = nextPlayer;//sets the button to have the inner text matching the player's letter
        if (nextPlayer === 'X') {
            nextPlayer = 'O';//for next player, set to X
        }
        else{
            if (nextPlayer === 'O') {
                nextPlayer = 'X';//for next player, set to X
            }
        }
    }
    let playerText = 'Next Player: ' + nextPlayer;
    playerIndicator.innerText = playerText;//changes after the nextPlayer variable changes
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';//makes the button unclickable (called after it was clicked)

    // Check if the game is over
    if (isGameOver())
    {   // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl');
        var newHeader = document.createElement('h1');
        newHeader.innerText = 'Game Over';
        lbl.appendChild(newHeader);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{   // This function returns true if all the buttons are disabled and false otherwise 
    let usedBtns = true;//tracks the buttons that were used
    for (let i = 0; i < btns.length; i++) {//for each button
        if (!btns[i].disabled) {//if the button is disabled
            usedBtns = false;//the tracker is set to false if any of the buttons are unclicked
        }        
    }
    return usedBtns;
}
