function SoundSource() {
    this.id = "SOURCE";
    this.oscillator;
    this.type;
    this.frequency;
    this.amplitude;
    this.position;
    this.size;

    this.initialise = function (type, frequency, amplitude, position, size) {

        this.oscillator = new p5.Oscillator();
        this.position = position;
        this.size = size;

        this.setType(type);
        this.setFrequency(frequency);
        this.setAmplitude(amplitude);
        this.oscillator.disconnect();
    }

    this.setType = function (type) {
        this.type = type;
        this.oscillator.setType(this.type);
    }

    this.setFrequency = function (frequency) {
        this.frequency = frequency;
        this.oscillator.freq(this.frequency);
    }

    this.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
        this.oscillator.amp(amplitude);
    }

    this.start = function () {
        this.oscillator.start();
    }

    this.stop = function () {
        this.oscillator.stop();
    }

    this.connectTo = function (output) {
        this.oscillator.connect(output);
    }

    this.getOscillator = function () {
        return this.oscillator;
    }

    this.draw = function () {
        if (this == activeObject) {
            fill(ACTIVE_COLOUR);
        } else {
            fill(SOURCE_COLOUR)
        }
        ellipse(this.position.x, this.position.y, this.size, this.size)
    }

    this.clicked = function (distance) {
        if (distance < this.size / 2) {
            return true;
        } else {
            return false;
        }
    }
}