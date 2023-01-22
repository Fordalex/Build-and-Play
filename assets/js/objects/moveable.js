class Moveable {
    constructor(pixel) {
        this.pixel = pixel;
        this.pixelType = pixel.dataset.pixelType;
        this.x = pixel.dataset.pixelX;
        this.y = pixel.dataset.pixelY;
        this.location = { x: this.x, y: this.y };
    }

    move(direction) {
        let { nextPixel, nextPixelType } = this.getNextPixel(this.location, direction);

        switch (nextPixelType) {
            case 'board':
                this.interactWithBoard(nextPixel, nextPixelType);
                break;
            case 'goal':
                this.interactWithGoal();
                break;
            case 'enemy':
                this.interactWithEnemy();
                break;
            case 'player':
                this.interactWithPlayer();
                break;
            case 'box':
                this.interactWithBox(direction);
        }
    }

    getNextPixel(from, direction) {
        let x = parseInt(from['x']) + parseInt(direction['x']);
        let y = parseInt(from['y']) + parseInt(direction['y']);

        let nextPixel = document.querySelector(`[data-pixel-x="${x}"][data-pixel-y="${y}"]`);
        let nextPixelType = nextPixel.dataset.pixelType;

        return { nextPixel, nextPixelType };
    }

    interactWithBoard(nextPixel, nextPixelType) {
        this.pixel.dataset.pixelType = nextPixelType;
        nextPixel.dataset.pixelType = this.pixelType;
    }

    interactWithGoal() {
        // maybe get these methods to return ture or false if that object has been moved
        return;
    }

    interactWithEnemy() {
        return;
    }

    interactWithPlayer() {
        return;
    }

    interactWithBox(direction) {
        let { nextPixel, nextPixelType } = this.getNextPixel(this.location, direction);
        let { nextNextPixel: nextNextPixelType } = this.getNextPixel(nextPixel, direction);

        if (nextNextPixelType === 'board') {
            this.interactWithBoard(this.location, direction);
        }
    }
}