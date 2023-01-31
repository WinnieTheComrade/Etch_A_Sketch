const container = document.querySelector('.container');
let board = document.querySelector('.board');
const reset = document.querySelector('.reset')
board.style.gridTemplateColumns = "repeat(100, 1fr)";
board.style.gridTemplateRows = "repeat(100, 1fr)";

    for (let i=0; i < 10000; i++){
        let block = document.createElement("div");
        block.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', block)
        block.addEventListener("mouseenter", (block) => {
            block.target.style.backgroundColor= 'black';
        });
}
