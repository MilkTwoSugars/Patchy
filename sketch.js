function setup() {
    createCanvas(windowWidth, windowHeight);
    background("white");
}

function draw() {
    if (initialised) {
        background("white");

        for (let g of grids) {

            g.rack.draw();
            for (let s of g.sources) {
                s.draw();
            }

            for (let f of g.filters) {
                f.draw();
            }

            for (let l of g.lfosA) {
                l.draw();
            }

            for (let l of g.lfosB) {
                l.draw();
            }

            g.rack.drawConnections();

        }
        mixer.draw();

    }
}




