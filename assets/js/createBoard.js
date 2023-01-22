
// Build game board

// The board has to be a sqaure
let maxX = 50;
let maxY = maxX;

let pixelSize = 10;
let pixel = '<div></div>';
let gameBoard = document.getElementById('gameBoard');
gameBoard.style.height = (maxY * pixelSize).toString().concat('px');
gameBoard.style.width = (maxX * pixelSize).toString().concat('px');

for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
        gameBoard.insertAdjacentHTML('afterbegin', createPixel(x, y))
    }
}

function createPixel(x, y) {
    return `<div data-pixel-x="${maxX - x}" data-pixel-y="${maxY - y}" data-pixel-type="blank"></div>`;
}