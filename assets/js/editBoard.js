let activeMenuItem = 'blank';

let clickDown = false;
document.addEventListener('mousedown', () => clickDown = true);
document.addEventListener('mouseup', () => clickDown = false);

let pixels = document.querySelectorAll('[data-pixel-type]');
pixels.forEach((p) => {
    p.addEventListener('mouseover', updatePixelTypeMouseOver);
    p.addEventListener('click', updatePixelType);
})

function updatePixelTypeMouseOver() {
    if (!clickDown) { return }
    
    updatePixelType.call(this);
}

function updatePixelType() {
    if (activeMenuItem === 'player1' || activeMenuItem === 'player2') {
        removePlayerPixel(activeMenuItem);
    }
    this.dataset.pixelType = activeMenuItem;
}

function removePlayerPixel(player) {
    let playerPixel = document.querySelector(`[data-pixel-type="${player}"]`);
    if (!playerPixel) { return }

    playerPixel.dataset.pixelType = 'blank';
}