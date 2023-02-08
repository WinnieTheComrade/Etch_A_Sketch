const sizeInput = document.getElementById('size').value;
const size = sizeInput
let isDrawing = false;
const board = document.querySelector('.board');

function gridCreation(size){
    let block = board.querySelectorAll('div')
    block.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    const amount = size * size;
    for (let i=0; i < amount; i++){
        let block = document.createElement('div');
        board.insertAdjacentElement('beforeend', block);

        block.addEventListener('mousedown', () => {
            isDrawing = true;
        });

        block.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        block.addEventListener('mouseover', (block) => {
            if (isDrawing) {
                const brushColor = document.getElementById('brushColor').value;
                block.target.style.backgroundColor = brushColor;
            }
        });
    }
}
gridCreation(16);

function changeSize(input){
    if (input >= 2 && input <= 100){
     gridCreation(input)
    }
    else {
        alert ("Number has to be between 2 and 100.")
    }
}

function changeCanvasColor(){
    const canvasColor = document.getElementById('canvasColor').value;
    const block = board.querySelectorAll('div');
    block.forEach((block) => block.style.backgroundColor = canvasColor);
}

function resetGrid(){
    const block = board.querySelectorAll('div');
    block.forEach((block) => block.style.backgroundColor = 'white');
}

/* Old code
const container = document.querySelector('.container');
let board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
board.style.gridTemplateRows = `repeat(${16}, 1fr)`;
let brushColor = document.getElementById('brushColor').value;
let isDrawing = false;

let amount = size * size;
for (let i=0; i < amount; i++){
        let block = document.createElement("div");
    
        board.insertAdjacentElement('beforeend', block)
        block.addEventListener("mousedown", () => {
        isDrawing  = true;
        });

        block.addEventListener("mouseup", () => {
        isDrawing  = false;
        });

        block.addEventListener("mouseover", (block) => {
            if (isDrawing) {
                const brushColor = document.getElementById('brushColor').value;
                block.target.style.backgroundColor= brushColor;   
            }
        });
    }

function gridSize(num){
    const brushColor = document.getElementById('brushColor').value;
    num = prompt("Please give me a number.");
    let blocks = board.querySelectorAll('div')
    blocks.forEach((div) => div.remove());

    for (let i=0; i < (num * num); i++){
        board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        let block = document.createElement("div");
        board.insertAdjacentElement('beforeend', block)
        block.addEventListener("mousedown", () => {
            isDrawing = true;
        });

        block.addEventListener("mouseup", () => {
            isDrawing = false;
        });

        block.addEventListener("mouseover", (block) => {
            if (isDrawing) {
                const brushColor = document.getElementById('brushColor').value;
                block.target.style.backgroundColor = brushColor;
            }
        })
    }

}

    
function rainbow() {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        brushColor = 'rgb(' + r +', ' + g + ',' + b +')';
}

function canvasColor(){
    const canvasColor = document.getElementById('canvasColor').value;
    let blocks = board.querySelectorAll('div')
    blocks.forEach((div) => div.style.backgroundColor = canvasColor)
}
function resetGrid(){
    let blocks = board.querySelectorAll('div')
    blocks.forEach((div) => div.style.backgroundColor='white')
    
}
*/