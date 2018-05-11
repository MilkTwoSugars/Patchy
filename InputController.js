var touchStart;
var touchEnd;


function touchStarted() {
    checkAudioContext();
    if (initialised) {
        clickHandler();
    }

}

function clickHandler() {

    for (let g of grids) {

        g.button.clicked(getDistance(g.button));

        for (let s of g.sources) {
            let a = s.clicked(getDistance(s.position));
            if (a) {
                g.activeSource = s;
                activeObject = s;
            }
        }

        for (let l of g.lfosA) {
            let a = l.clicked(getDistance(l.position));
            if (a) {
                g.activeLFOA = l;
                activeObject = l;
            }
        }

        for (let l of g.lfosB) {
            let a = l.clicked(getDistance(l.position));
            if (a) {
                g.activeLFOB = l;
                activeObject = l;
            }
        }

        for (let f of g.filters) {
            let a = f.clicked(getDistance(f.position));
            if (a) {
                g.activeFilter = f;
                activeObject = f;
            }
        }
        g.rack.updateRack(g.activeSource, g.activeLFOA, g.activeLFOB, g.activeFilter);
    }

    mixer.clicked(getDistance(mixer));
    mixer.updateMixer(activeObject);

}

function touchEnded() {
    if (initialised) {
        mixer.released();
    }
}

function getDistance(element) {
    return float(dist(mouseX, mouseY, element.x, element.y));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
