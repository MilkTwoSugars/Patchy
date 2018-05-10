function SoundFilter() {
    this.id = "FILTER";
    this.filterObj;
    this.ampObj;
    this.type;
    this.frequency;
    this.resonance;
    this.position;
    this.size;

    this.initialise = function (type, frequency, resonance, position, size) {
        this.filterObj = new p5.Filter();
        this.position = position;
        this.size = size;

        this.setType(type);
        this.setFrequency(frequency);
        this.setResonance(resonance);
        this.initialiseAmplitude();
    }

    this.connectFrequencyTo = function (source) {
        this.filterObj.freq(source);
    }

    this.initialiseAmplitude = function () {
        this.ampObj = new p5.Amplitude();
        this.ampObj.setInput(this.getFilter());
    }

    this.setType = function (type) {
        this.type = type;
        this.filterObj.setType(this.type);
    }

    this.setFrequency = function (frequency) {
        this.frequency = frequency;
        this.filterObj.freq(frequency);
    }

    this.setResonance = function (resonance) {
        this.resonance = resonance;
        this.filterObj.res(resonance);
    }

    this.getResonance = function () {
        return this.resonance;
    }

    this.getFilter = function () {
        return this.filterObj;
    }

    this.getLevel = function () {
        return this.ampObj.getLevel();
    }

    this.draw = function () {
        if (this == activeObject) {
            fill(ACTIVE_COLOUR);
        } else {
            fill(FILTER_COLOUR)
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