class Enemy extends Moveable {
    constructor(pixel) {
        super(pixel);
    }

    interactWithPlayer() {
        alert('You lost!');
    }
}

// enemy logic

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