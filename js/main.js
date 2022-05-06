/*
State variables:
1. board (tracking the state of the board)
2. turn (who's turn is it?)
3. winner (is there a wiiner, and if so, who?)
*/



/*----- constants -----*/
const COLORS = {
  '0': 'white',
  '1': 'red',
  '-1': 'yellow'
};

/*----- app's state (variables) -----*/
let board;  // array of column arrays / elements will hold 1/-1 for the players or 0 -> empty
let turn;   // 1 or -1   
let winner; // null -> game in progress; 1/-1 -> a player has won; 'T' -> Tie

/*----- cached element references -----*/
const btnEl = document.querySelector('button');
const msgEl = document.querySelector('h1');

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
  renderBoard();
  renderMessage();
}

function renderBoard() {
  board.forEach(function(colArr, colIdx) {
    colArr.forEach(function(playerVal, rowIdx) {
      const divId = `c${colIdx}r${rowIdx}`;
      const divEl = document.getElementById(divId);
      divEl.style.backgroundColor = COLORS[playerVal];
    });
  });
}

function renderMessage() {
  if (winner === 'T') {
    msgEl.innerHTML = "It's a Tie!!!";
  } else if (winner) {
    msgEl.innerHTML = `${COLORS[winner].toUpperCase()} Wins!`;
  } else {
    msgEl.innerHTML = `${COLORS[turn].toUpperCase()}'s Turn`;
  }
}