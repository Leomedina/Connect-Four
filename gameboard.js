const WIDTH = 7;
const HEIGHT = 6;

let board = []; // array of rows, each row is array of cells  (board[y][x])

/*
    makeBoard: create in-JS board structure:
    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
    // This for loop adds an empty array item to the board row variable 
    // this adds the boardRow array item into the board array
    for (let i = 0; i < HEIGHT; i++) {
        const boardRow = []
        for (let i = 0; i < WIDTH; i++) {
            boardRow.push(null);
        }
        board.push(boardRow);
    }
}

/*
    // CREATE TOP ROW ELEMENT: //
    This creates a table row element, adds the id "column-top"

    After the for loop will then create table data elements
*/

/*
   //  CREATE THE FOLLOWING ROWS: //
    1. creating a row element
    2. add items to that row element
    3. add the index of the element as the ID
    4. append that row element to the board
*/

function makeHtmlBoard() {
    htmlBoard = document.querySelector("#board");

    //CREATE TOP ROW ELEMENT//
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener('mouseover', (e) => {
        let target = e.target;
        if (currPlayer === 1) {
            target.style.background = "linear-gradient(to bottom right, #faa52f 40%, #A47306 100%)"
        } else {
            target.style.background = "linear-gradient(to bottom right, #5AABEF 5%, #274690 70%)"
        }
    });
    top.addEventListener('mouseout', (e) => {
        let target = e.target;
        target.style.background = '#0d1520';
    });


    top.addEventListener("click", handleClick);

    for (let x = 0; x < WIDTH; x++) {
        const headCell = document.createElement("td");
        headCell.setAttribute("id", x);
        top.append(headCell);
    }
    htmlBoard.append(top);

    //CREATE FOLLOWING ROWS ON THE BOARD//
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