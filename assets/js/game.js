let activeMenuItem = 'blank';
let playerCount = 0;

function startGame() {
    addPlayerLogic();
}

class Player {
    constructor(pixel) {
        this.pixel = pixel;
        this.pixelType = pixel.dataset.pixelType;
        this.x = pixel.dataset.pixelX;
        this.y = pixel.dataset.pixelY;
    }

    move(direction) {
        let x = parseInt(this.x) + parseInt(direction['x']);
        let y = parseInt(this.y) + parseInt(direction['y']);

        let nextPixel = document.querySelector(`[data-pixel-x="${x}"][data-pixel-y="${y}"]`);
        let nextPixelType = nextPixel.dataset.pixelType;
        if (nextPixelType === 'board') {
            this.pixel.dataset.pixelType = nextPixelType;
            nextPixel.dataset.pixelType = this.pixelType;
        }

        if (nextPixelType === 'goal') {
            alert('You win!');
        }
    }
}

function addPlayerLogic() {
    document.addEventListener('keypress', (e) => {
        let playerPixel = document.querySelector('[data-pixel-type="player"]');
        let player = new Player(playerPixel)
        let moveDirection = { x: 0, y: 0 }
        let playerCoordinates = { x: player.x, y: player.y}

        if (e.key == 'a') { moveDirection['x'] = '-1' }

        if (e.key == 'd') { moveDirection['x'] = '1' }

        if (e.key == 'w') { moveDirection['y'] = '-1' }

        if (e.key == 's') { moveDirection['y'] = '1' }

        // movePixelFrom(playerCoordinates, moveDirection, player);
    })
}

setInterval(() => {
    let pixels = document.querySelectorAll('[data-pixel-type="enemy"]');
    pixels.forEach((pixel) => {
        let moveDirection = { x: 0, y: 0 }
        let randomDirection = Math.floor(Math.random() * 4);
        if (randomDirection === 0) { moveDirection['x'] = '-1' }
        if (randomDirection === 1) { moveDirection['x'] = '1' }
        if (randomDirection === 2) { moveDirection['y'] = '-1' }
        if (randomDirection === 3) { moveDirection['y'] = '1' }
        let pixelCoordinates = { x: pixel.dataset.pixelX, y: pixel.dataset.pixelY }
    
        movePixelFrom(pixelCoordinates, moveDirection, pixel);
    })
}, 500)


function movePixelFrom(playerCoordinates, moveDirection, pixel) {
    let x = parseInt(playerCoordinates['x']) + parseInt(moveDirection['x']);
    let y = parseInt(playerCoordinates['y']) + parseInt(moveDirection['y']);

    let nextPixel = document.querySelector(`[data-pixel-x="${x}"][data-pixel-y="${y}"]`);
    let nextPixelType = nextPixel.dataset.pixelType;
    if (nextPixelType === 'board') {
        let pixelType = pixel.dataset.pixelType;
        pixel.dataset.pixelType = nextPixelType;
        nextPixel.dataset.pixelType = pixelType;
    }

    if (nextPixelType === 'goal') {
        alert('You win!');
    }
}

startGame();