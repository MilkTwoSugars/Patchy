function setup() {
    createCanvas(windowWidth, windowHeight);
    background(BACKGROUND_COLOUR);
}

function draw() {
    if (initialised) {
        background(BACKGROUND_COLOUR);
        noStroke();

        for (let g of grids) {
            g.draw();
        }
        mixer.draw();
    } else {
        background(BACKGROUND_COLOUR);
        textSize(32);
        textAlign(CENTER);
        fill(ACTIVE_COLOUR);
        text('Touch to begin', windowWidth / 2, windowHeight / 2);
    }
}




