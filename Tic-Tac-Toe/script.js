let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let a = document.querySelector("#winner");

let turno = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5,],
    [1, 4, 7],
    [6, 7, 8],
    [2, 5, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        console.log("button clicked!");

        if (turno) {

            box.style.color = "#035cc2";
            box.innerHTML = "O"
            turno = false;

        } else {

            box.style.color = "#ae2012"
            box.innerHTML = "X"
            turno = true;
        }
        box.disabled = true;
        checkwinner()

    });

});

const resetfun = () => {

    turno = true;
    unableBoxes();
    a.innerHTML = "";
    a.classList.add("winner");

}
const unableBoxes = () => {

    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }

}
const disableBoxes = () => {

    for (box of boxes) {
        box.disabled = true;
    }

}
const winner = (pos1) => {

    a.innerHTML = `<p>Congratulations!! Winner is ${pos1}</p>`;
    a.classList.remove("win")
    disableBoxes();
}

const checkwinner = () => {

    for (let patterns of winpattern) {

        let pos0 = boxes[patterns[0]].innerHTML;
        let pos1 = boxes[patterns[1]].innerHTML;
        let pos2 = boxes[patterns[2]].innerHTML;
        if (pos0 != "" && pos1 != "" && pos2 != " ") {
            if (pos0 === pos1 && pos1 === pos2) {
                console.log("winner", pos0);
                winner(pos1);
            }
        }

    }

}

reset.addEventListener("click", resetfun)