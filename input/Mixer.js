function Mixer(y, size, object) {
    this.object = object;
    this.x = 0;
    this.y = y;
    this.size = size;
    this.dragging = false;

    this.getPositionFromFrequency = function () {
        if (this.object.id === "SOURCE") {
            this.x = map(this.object.getOscillator().getFreq(), lowestOscFreq, highestOscFreq, 0, windowWidth);
        }
        if (this.object.id === "LFO") {
            this.x = map(this.object.getOscillator().getFreq(), lowestLFOFreq, highestLFOFreq, 0, windowWidth);
        }
        if (this.object.id === "FILTER") {
            this.x = map(this.object.getResonance(), lowestResonance, highestResonance, 0, windowWidth);
        }
    }

    this.updateObject = function () {
        if (this.object.id === "SOURCE") {
            let f = map(this.x, 0, windowWidth, lowestOscFreq, highestOscFreq);
            this.object.setFrequency(f);
        }
        if (this.object.id === "LFO") {
            let f = map(this.x, 0, windowWidth, lowestLFOFreq, highestLFOFreq);
            this.object.setFrequency(f);
        }
        if (this.object.id === "FILTER") {
            let r = map(this.x, 0, windowWidth, lowestResonance, highestResonance);
            this.object.setResonance(r);
        }
    }

    this.updateMixer = function (object) {
        this.object = object;
        this.getPositionFromFrequency();
    }

    this.draw = function () {
        if (this.dragging) {
            this.x = mouseX;
            if (this.x > windowWidth) {
                this.x = windowWidth;
            } else if (this.x < 0) {
                this.x = 0;
            }
        }
        rectMode(CENTER);
        rect(this.x, this.y, this.size, this.size);
        this.updateObject();
    }

    this.clicked = function (distance) {
        if (distance < this.size / 2) {
            this.dragging = true;
        }
    }

    this.released = function () {
        this.dragging = false;
    }

}