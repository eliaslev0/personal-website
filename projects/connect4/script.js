// document.addEventListener('DOMContentLoaded', () => {

const squares = document.querySelectorAll('td');
const result = document.querySelector('#result');

const displayCurrentPlayer = document.querySelector('#current-player');
let currentPlayer = 1;
let trackPlayer = 1;

let test = 1;

console.log(test);

let gameOver = false;


let gameboard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

function winner (currentPlayer) {
    var x = document.createElement("button");
    x.innerHTML = '<button style="text-align: center" type="button" onclick="reload()">Reload</button>';
    x.style.background = "none"
    x.style.border = "none"
    x.style.margin = "auto";
    document.body.appendChild(x);
    gameOver = true;
    document.getElementById("result").innerHTML = "Player " + currentPlayer + " wins!";
}

function reload() {
    location.reload();
}

function showPieceOnHover(column) {
    if (currentPlayer == 1) {
        document.getElementById(`${0}-${column}`).style.background = "rgba(112, 22, 30, 0.5)";
    } else if (currentPlayer == 2) {
        document.getElementById(`${0}-${column}`).style.background = "rgba(28, 49, 68, 0.5)";
    }
}

function hidePieceOnHover(column) {
    if (gameboard[0][column] == 1) {
        document.getElementById(`${0}-${column}`).style.background = "rgba(112, 22, 30, 1)";
    } else if (gameboard[0][column] == 2) {
        document.getElementById(`${0}-${column}`).style.background = "rgba(28, 49, 68, 1 )";
    } else {
        document.getElementById(`${0}-${column}`).style.background = "rgba(195, 216, 152, 0.48)";
    }
}

console.table(gameboard);

function setPiece(column) {
    if (currentPlayer == 1 && !gameOver) {
        for (let row = 5; row >= 0; row--) {
            if (gameboard[row][column] == 0) {
                gameboard[row][column] = 1;
                document.getElementById(`${row}-${column}`).style.backgroundColor = "#70161E";
                break;
            }
            trackPlayer = row;
            
        }
        
        console.table(gameboard);
        checkForWin();
        if (trackPlayer != 0) {
            currentPlayer = 2;
            document.getElementById("current-player").innerHTML = "2"
        }
        
    } else if (currentPlayer == 2 && !gameOver) {
        for (let row = 5; row >= 0; row--) {
            if (gameboard[row][column] == 0) {
                gameboard[row][column] = 2;
                document.getElementById(`${row}-${column}`).style.backgroundColor = "#1C3144";
                break;
            }
            trackPlayer = row;
            
        }

        console.table(gameboard);
        checkForWin();
        if (trackPlayer != 0) {
            currentPlayer = 1;
            document.getElementById("current-player").innerHTML = "1"
        }
        
    }
    
}

function checkForWin () {
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            // horizontal
            
            if (gameboard[i][j] == currentPlayer 
                && gameboard[i][j+1] == currentPlayer
                && gameboard[i][j+2] == currentPlayer
                && gameboard[i][j+3] == currentPlayer) {
                    winner(currentPlayer);
                    break;
            } 
            // vertical
            else if(i+3 < 6 && gameboard[i][j] == currentPlayer
                && gameboard[i+1][j] == currentPlayer
                && gameboard[i+2][j] == currentPlayer
                && gameboard[i+3][j] == currentPlayer) {
                    winner(currentPlayer);
                    break;
            } else {
                if (i-3 > 0) {
                    if(gameboard[i][j] == currentPlayer
                        && gameboard[i-1][j+1] == currentPlayer
                        && gameboard[i-2][j+2] == currentPlayer
                        && gameboard[i-3][j+3] == currentPlayer) {
                            winner(currentPlayer);
                            break;
                    } 
                    // diagonal / top to bottom
                    else if(gameboard[i][j] == currentPlayer
                        && gameboard[i-1][j-1] == currentPlayer
                        && gameboard[i-2][j-2] == currentPlayer
                        && gameboard[i-3][j-3] == currentPlayer) {
                            winner(currentPlayer);;
                            break;
                    }
                }
                // diagonal \ bottom to top
                
            }
            
        }
    }
}