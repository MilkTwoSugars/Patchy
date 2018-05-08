function NoiseLFO() {
    this.id = "LFO";
    this.oscillator;
    this.amplitude;
    this.type;
    this.position;
    this.size;

    this.initialise = function (type, amplitude, position, size) {

        this.oscillator = new p5.Noise();
        this.position = position;
        this.size = size;
        this.setType(type);
        this.setAmplitude(amplitude);
        this.oscillator.disconnect();
    }

    this.setType = function (type) {
        this.type = type;
        this.oscillator.setType(this.type);
    }

    this.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
        this.oscillator.amp(this.amplitude);
    }

    this.getOscillator = function () {
        return this.oscillator;
    }

    this.start = function () {
        this.oscillator.start();
    }

    this.draw = function () {
        if (this == activeObject){
            fill("red");
        }
        ellipse(this.position.x, this.position.y, this.size, this.size)
        noFill();
    }

    this.clicked = function (distance) {
        if (distance < this.size / 2) {
            return true;
        } else {
            return false;
        }
    }
}