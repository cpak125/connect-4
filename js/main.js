/*----- constants -----*/
const COLORS = {
  '0': 'white',
  '1': 'red',
  '-1': 'gold'
};

/*----- app's state (variables) -----*/
let board;  // array of column arrays / elements will hold 1/-1 for the players or 0 -> empty
let turn;   // 1 or -1   
let winner; // null -> game in progress; 1/-1 -> a player has won; 'T' -> Tie

/*----- cached element references -----*/
const btnEl = document.querySelector('button');
const msgEl = document.querySelector('h1');
const markerEls = [...document.querySelectorAll('#markers > div')];

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

// Update all impacted state, then call render()
function handleMove(event) {
  // Determine the index of the col. clicked
  const colIdx = markerEls.indexOf(event.target);
  // User did not click on a marker
  if (colIdx === -1 || winner) return;
  // Grab the column array
  const colArr = board[colIdx];
  // Find the first 0 in the colArr
  const rowIdx = colArr.indexOf(0);
  // Update the board
  colArr[rowIdx] = turn;
  // Update the turn
  turn *= -1;
  // Update the winner

  render();
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
    msgEl.innerHTML = `<span style="color:${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
  } else {
    msgEl.innerHTML = `<span style="color:${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
  }
}