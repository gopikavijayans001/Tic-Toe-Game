let boxes = document.querySelectorAll(".button");
let resetButton = document.querySelector(".reset-button"); // Corrected selector
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("p");

// playerO
let turn = true;

// we will use 2D array for accessing the elements in the box
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = (`Congratulations...! Winner is ${winner}`);
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (pattern of winPattern) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;
        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 == post2 && post2 == post3) {
                showWinner(post1);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetButton.addEventListener("click", resetGame);
