let activeMenuItem = 'blank';
let playerCount = 0;

function startGame() {
    addPlayerLogic();
}

class Person {
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

        // TODO: A Player and Enemy should not interact with the environment in the same way
        switch (nextPixelType) {
            case 'board':
                this.pixel.dataset.pixelType = nextPixelType;
                nextPixel.dataset.pixelType = this.pixelType;
                break;
            case 'goal':
                alert('You win!');
                break;
        }
    }
}
class Player extends Person {
    constructor(pixel) {
        super(pixel);
    }
}

class Enemy extends Person {
    constructor(pixel) {
        super(pixel);
    }
}

function addPlayerLogic() {
    document.addEventListener('keypress', (e) => {
        let playerPixel = document.querySelector('[data-pixel-type="player"]');
        let player = new Player(playerPixel)

        let moveDirection = { x: 0, y: 0 }
        if (e.key == 'a') { moveDirection['x'] = '-1' }
        if (e.key == 'd') { moveDirection['x'] = '1' }
        if (e.key == 'w') { moveDirection['y'] = '-1' }
        if (e.key == 's') { moveDirection['y'] = '1' }

        player.move(moveDirection);
    })
}

setInterval(() => {
    let pixels = document.querySelectorAll('[data-pixel-type="enemy"]');
    pixels.forEach((pixel) => {
        let enemy = new Enemy(pixel);

        let moveDirection = { x: 0, y: 0 }
        let randomDirection = Math.floor(Math.random() * 4);
        if (randomDirection === 0) { moveDirection['x'] = '-1' }
        if (randomDirection === 1) { moveDirection['x'] = '1' }
        if (randomDirection === 2) { moveDirection['y'] = '-1' }
        if (randomDirection === 3) { moveDirection['y'] = '1' }

        enemy.move(moveDirection);
    })
}, 500)

startGame();