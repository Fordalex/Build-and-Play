class Player extends Moveable {
    constructor(pixel) {
        super(pixel);
    }

    interactWithGoal() {
        alert('You won!');
    }

    interactWithEnemy() {
        alert('You lost!');
    }
}

// player logic

document.addEventListener('keypress', (e) => {
    let playerPixel = document.querySelector('[data-pixel-type="player1"]');
    let player = new Player(playerPixel)

    let moveDirection = { x: 0, y: 0 }
    if (e.key == 'a') { moveDirection['x'] = '-1' }
    if (e.key == 'd') { moveDirection['x'] = '1' }
    if (e.key == 'w') { moveDirection['y'] = '-1' }
    if (e.key == 's') { moveDirection['y'] = '1' }

    player.move(moveDirection);
})

document.addEventListener('keypress', (e) => {
    let playerPixel = document.querySelector('[data-pixel-type="player2"]');
    let player = new Player(playerPixel)



    let moveDirection = { x: 0, y: 0 }
    if (e.key == 'a') { moveDirection['x'] = '-1' }
    if (e.key == 'd') { moveDirection['x'] = '1' }
    if (e.key == 'w') { moveDirection['y'] = '-1' }
    if (e.key == 's') { moveDirection['y'] = '1' }

    player.move(moveDirection);
})