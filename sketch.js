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
    }
}




