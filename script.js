let colorChoice = "black"

const black = document.querySelector(".black");
const random = document.querySelector(".random")
const eraser = document.querySelector(".eraser")
const reset = document.querySelector(".restart")
let popup = document.querySelector(".popup")



black.addEventListener("click", function() {
    colorChoice = "black";
})

random.addEventListener("click", function() {
    colorChoice = "green";
})

eraser.addEventListener("click", function() {
    colorChoice = "white";
})

const select = document.querySelector(".select")

function createBoard() {
    size = +prompt("what width x height do you want the grids to be")
    if (size > 100 || size < 0) {
        popup.innerHTML = "Please enter a valid board size"
    } else {
    popup.innerHTML = "Lets start drawing!"
    const board = document.querySelector(".board");

    // Reset the board before creating a new grid
    board.innerHTML = "";

    // Set up the grid template for columns and rows
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let whole = size * size

    for (let i = 0; i < whole; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = colorChoice
        })
        board.insertAdjacentElement("beforeend", div)

    }
}
}

select.addEventListener("click", createBoard)
reset.addEventListener("click", createBoard)


