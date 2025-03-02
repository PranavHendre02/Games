// Board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// Bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;  
let birdY = boardHeight / 2; 
let birdImg = new Image();

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
};

// Pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;
let velocityX = -2; // Pipe moving speed

let toppipeImg = new Image();
let bottompipeImg = new Image();

window.onload = function () {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); 

    // Load Images
    birdImg.src = "./flappybird.gif";
    toppipeImg.src = "./toppipe.png";
    bottompipeImg.src = "./bottompipe.png";

    // Start updating once images are loaded
    birdImg.onload = function () {
        requestAnimationFrame(update);
    };

    setInterval(placePipe, 1500); // Add pipes every 1.5 sec
};

// Function to add pipes
function placePipe() {

    let randomPipey=pipeY-pipeHeight/4- Math.random()*(pipeHeight/2);

    let openingspace=board.height/4;

    let topPipe = {
        img: toppipeImg,
        x: boardWidth,
        y: randomPipey ,
        width: pipeWidth,
        height: pipeHeight
    };

    pipeArray.push(topPipe);

    let bottomPipe={
        img: bottompipeImg,
        x: boardWidth,
        y: randomPipey +pipeHeight+openingspace,
        width: pipeWidth,
        height: pipeHeight,
        passed:false
    }
    pipeArray.push(bottomPipe);
}

// Game Loop
function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height); // Clear canvas

    // Draw Bird
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    // Move and Draw Pipes
    for (let i = 1; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX; // Move pipe left
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}
