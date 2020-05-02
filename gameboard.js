const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
    for (let i = 0; i <= HEIGHT; i++) {
        for (let j = 0; j <= WIDTH; j++) {
            board[i] = new Array(WIDTH)
        }
    }
}

console.log(board[1][4]);

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
    // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
    htmlBoard = document.querySelector("#board");

    // TODO: add comment for this code
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", handleClick);

    for (let x = 0; x < WIDTH; x++) {
        const headCell = document.createElement("td");
        headCell.setAttribute("id", x);
        top.append(headCell);
    }
    htmlBoard.append(top);

    // TODO: add comment for this code
    for (let y = 0; y < HEIGHT; y++) {
        const row = document.createElement("tr");
        for (let x = 0; x < WIDTH; x++) {
            const cell = document.createElement("td");
            cell.setAttribute("id", `${y}-${x}`);
            row.append(cell);
        }
        htmlBoard.append(row);
    }
}

makeHtmlBoard();