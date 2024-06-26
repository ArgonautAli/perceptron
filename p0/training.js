class Points{
    constructor() {
        // Get canvas dimensions
        this.canvasWidth = 800;
        this.canvasHeight = 800;

        // Randomize position within canvas dimensions
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;

        // Assign label based on position relative to diagonal line
        this.label = this.x > this.y ? 1 : -1;
    }

    show() {
        stroke(0);
        fill(this.label === 1 ? 255 : 0);
        ellipse(this.x, this.y, 16, 16);
    }
}

