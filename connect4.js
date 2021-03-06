/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let currPlayer = 1; // active player: 1 or 2

function findSpotForCol(x) {
	// TODO: write the real version of this, rather than always returning 0
	for (let y = HEIGHT - 1; y >= 0; y--) {
		if (board[y][x] === null) {
			board[y][x] = currPlayer;
			return y;
		}
	}
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
	// TODO: make a div and insert into correct table cell
	const newDiv = document.createElement('div');
	const getPlace = document.getElementById(`${y}-${x}`);

	newDiv.classList.add('piece', `p${currPlayer}`, 'drop');
	getPlace.appendChild(newDiv);
}

/** endGame: announce game end */

function endGame(msg) {
	// TODO: pop up alert message 
	window.alert(msg);

	//Retrieve the HTML Board & array board
	//delete the boards then call function to create new boards
	//create reset game func - 
	htmlBoard = document.querySelector('#board');
	htmlBoard.innerHTML = '';
	board = [];

	makeHtmlBoard();
	makeBoard();
}

const resetButton = document.querySelector('button');

resetButton.addEventListener('click', resetBtn);

function resetBtn() {
	endGame('reset');
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
	// get x from ID of clicked cell
	const x = +evt.target.id;

	// get next spot in column (if none, ignore click)
	const y = findSpotForCol(x);
	console.log(y);
	if (y === undefined) {
		return;
	}

	// place piece in board and add to HTML table
	placeInTable(y, x);

	// switch players
	// ? operator for short-hand (good for small else if or if)
	if (currPlayer === 1) {
		currPlayer = 2;
	} else if (currPlayer === 2) {
		currPlayer = 1;
	}
	// check for win // optimze af
	if (checkForWin()) {
		return endGame(`Player ${currPlayer} won!`);
	}

	// check for tie
	if (board.every((row) => row.every((cell) => cell > 0))) {
		return endGame('Tie!');
	}
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
	function _win(cells) {
		// Check four cells to see if they're all color of current player
		//  - cells: list of four (y, x) cells
		//  - returns true if all are legal coordinates & all match currPlayer

		return cells.every(([y, x]) => y >= 0 && y < HEIGHT && x >= 0 && x < WIDTH && board[y][x] === currPlayer);
	}

	// TODO: read and understand this code. Add comments to help you.

	for (let y = 0; y < HEIGHT; y++) {
		for (let x = 0; x < WIDTH; x++) {
			//check if not empty then continue
			let horiz = [
				[y, x],
				[y, x + 1],
				[y, x + 2],
				[y, x + 3],
			];
			let vert = [
				[y, x],
				[y + 1, x],
				[y + 2, x],
				[y + 3, x],
			];
			let diagDR = [
				[y, x],
				[y + 1, x + 1],
				[y + 2, x + 2],
				[y + 3, x + 3],
			];
			let diagDL = [
				[y, x],
				[y + 1, x - 1],
				[y + 2, x - 2],
				[y + 3, x - 3],
			];

			if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
				return true;
			}
		}
	}
}

makeBoard();
makeHtmlBoard();
//make smaller functions
//a good function should be one screen don't scroll