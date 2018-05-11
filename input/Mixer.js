function Mixer(y, size, object) {
    this.object = object;
    this.x = 100;
    this.y = y;
    this.size = size;
    this.dragging = false;
    this.railStart = 100;
    this.railEnd = windowWidth - 100;
    this.colour = "white";

    this.getPositionFromFrequency = function () {
        if (this.object.id === "SOURCE") {
            this.x = map(this.object.getOscillator().getFreq(), lowestOscFreq, highestOscFreq, this.railStart, this.railEnd);
        }
        if (this.object.id === "LFO") {
            this.x = map(this.object.getOscillator().getFreq(), lowestLFOFreq, highestLFOFreq, this.railStart, this.railEnd);
        }
        if (this.object.id === "FILTER") {
            this.x = map(this.object.getResonance(), lowestResonance, highestResonance, this.railStart, this.railEnd);
        }
    }

    this.updateObject = function () {
        if (this.object.id === "SOURCE") {
            let f = map(this.x, this.railStart, this.railEnd, lowestOscFreq, highestOscFreq);
            this.object.setFrequency(f);
            this.colour = SOURCE_COLOUR;
        }
        if (this.object.id === "LFO") {
            let f = map(this.x, this.railStart, this.railEnd, lowestLFOFreq, highestLFOFreq);
            this.object.setFrequency(f);
            this.colour = LFO_COLOUR;
        }
        if (this.object.id === "FILTER") {
            let r = map(this.x, this.railStart, this.railEnd, lowestResonance, highestResonance);
            this.object.setResonance(r);
            this.colour = FILTER_COLOUR;
        }
    }

    this.updateMixer = function (object) {
        this.object = object;
        this.getPositionFromFrequency();
    }

    this.draw = function () {
        if (this.dragging) {
            let pos = floor(mouseX, this.railStart, this.railEnd);
            this.x = pos;
            if (this.x > this.railEnd) {
                this.x = this.railEnd;
            } else if (this.x < this.railStart) {
                this.x = this.railStart;
            }
        }
        // Lines
        stroke(RAIL_COLOUR);
        line(this.railStart, this.y, this.railEnd, this.y);
        noStroke();

        // Caps
        fill(RAIL_COLOUR);
        ellipse(this.railStart, this.y, this.size / 4, this.size / 4);
        ellipse(this.railEnd, this.y, this.size / 4, this.size / 4);

        // Dial
        //ellipse(this.x, this.y, this.size, this.size);
        fill(this.colour);
        ellipse(this.x, this.y, this.size / 1.1, this.size / 1.1);
        
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