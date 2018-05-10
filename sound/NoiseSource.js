function NoiseSource() {
    this.id = "SOURCE";
    this.noise;
    this.type;
    this.frequency;
    this.amplitude;
    this.position;
    this.size;

    this.initialise = function (type, amplitude, position, size) {

        this.noise = new p5.Noise();

        this.position = position;
        this.size = size;

        this.setType(type);
        this.setAmplitude(amplitude);
        this.noise.disconnect();
    }

    this.setType = function (type) {
        this.type = type;
        this.noise.setType(this.type);
    }

    this.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
        this.noise.amp(amplitude);
    }

    this.start = function () {
        this.noise.start();
    }

    this.stop = function () {
        this.noise.stop();
    }

    this.connectTo = function (output) {
        this.noise.connect(output);
    }

    this.getOscillator = function () {
        return this.noise;
    }

    this.draw = function () {
        if (this == activeObject) {
            fill(ACTIVE_COLOUR);
        } else {
            fill(SOURCE_COLOUR)
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