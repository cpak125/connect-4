/*
State variables:
1. board (tracking the state of the board)
2. turn (who's turn is it?)
3. winner (is there a wiiner, and if so, who?)
*/



/*----- constants -----*/



/*----- app's state (variables) -----*/
let board;  // array of column arrays / elements will hold 1/-1 for the players or 0 -> empty
let turn;   // 1 or -1   
let winner = true; // null -> game in progress; 1/-1 -> a player has won; 'T' -> Tie

/*----- cached element references -----*/
const btnEl = document.querySelector('button');


/*----- event listeners -----*/
btnEl.addEventListener('click', init);
document.getElementById('markers').addEventListener('click', handleMove);
/*----- functions -----*/
init();
// Initialize all state, thenc all render()
function init() {
    // Visualize mapping to DOM by rotating
    // 90 degrees counter-clockwise
    board = [
        [0, 0, 0, 0, 0, 0], // column 0
        [0, 0, 0, 0, 0, 0], // column 1
        [0, 0, 0, 0, 0, 0], // column 2
        [0, 0, 0, 0, 0, 0], // column 3
        [0, 0, 0, 0, 0, 0], // column 4
        [0, 0, 0, 0, 0, 0], // column 5
        [0, 0, 0, 0, 0, 0], // column 6
    ];
    turn = 1;
    winner = null;
    render();
}

function handleMove(event) {
    console.log(event.target);
}

function render() {
    btnEl.style.visibility = winner ? 'visible' : 'hidden';
}
