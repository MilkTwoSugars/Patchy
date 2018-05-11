function Grid() {
    this.rack;

    this.sources = [];
    this.lfosA = [];
    this.lfosB = [];
    this.filters = [];

    this.activeSource;
    this.activeLFOA;
    this.activeLFOB;
    this.activeFilter;

    this.rackHeight;
    this.rackWidth;
    this.rackHorizontalMargin;
    this.rackVerticalMargin;

    this.column1, this.column2, this.column3, this.column4;
    this.row1, this.row2, this.row3, this.row4;

    this.buttonSize;

    this.button;
    this.active;

    this.initialise = function (startActive, leftOffset) {

        this.active = startActive;

        this.margin = windowWidth / 20;
        this.buttonSize = this.margin;

        this.column1 = 0 + this.margin + leftOffset;
        this.column2 = this.column1 + this.margin;
        this.column3 = this.column2 + this.margin;
        this.column4 = this.column3 + this.margin;

        this.row1 = 0 + this.margin;
        this.row2 = this.row1 + this.margin;
        this.row3 = this.row2 + this.margin;
        this.row4 = this.row3 + this.margin;

        this.rackHeight = this.margin * 5;
        this.rackWidth = windowWidth;

        this.button = new Button(this, this.active, this.margin + leftOffset, this.row4 + this.margin, this.buttonSize)

        this.soundSource1 = new SoundSource();
        this.soundSource1.initialise("sine", 100, 0.1, createVector(this.column1, this.row1), this.buttonSize);
        this.soundSource2 = new SoundSource();
        this.soundSource2.initialise("sawtooth", 120, 0.1, createVector(this.column1, this.row2), this.buttonSize);
        this.soundSource3 = new SoundSource();
        this.soundSource3.initialise("square", 140, 0.1, createVector(this.column1, this.row3), this.buttonSize);
        this.soundSource4 = new SoundSource();
        this.soundSource4.initialise("triangle", 160, 0.1, createVector(this.column1, this.row4), this.buttonSize);

        this.sources.push(this.soundSource1, this.soundSource2, this.soundSource3, this.soundSource4);

        this.lfo1A = new LFO();
        this.lfo1A.initialise("sine", 0.75, defaultLFOAmplitude, createVector(this.column2, this.row1), this.buttonSize);
        this.lfo2A = new LFO();
        this.lfo2A.initialise("sawtooth", 1, defaultLFOAmplitude, createVector(this.column2, this.row2), this.buttonSize);
        this.lfo3A = new LFO();
        this.lfo3A.initialise("square", 0.25, defaultLFOAmplitude, createVector(this.column2, this.row3), this.buttonSize);
        this.lfo4A = new LFO();
        this.lfo4A.initialise("triangle", 0.5, defaultLFOAmplitude, createVector(this.column2, this.row4), this.buttonSize);

        this.lfosA.push(this.lfo1A, this.lfo2A, this.lfo3A, this.lfo4A);

        this.lfo1B = new LFO();
        this.lfo1B.initialise("sine", 0.5, defaultLFOAmplitude, createVector(this.column3, this.row1), this.buttonSize);
        this.lfo2B = new LFO();
        this.lfo2B.initialise("sawtooth", 1, defaultLFOAmplitude, createVector(this.column3, this.row2), this.buttonSize);
        this.lfo3B = new LFO();
        this.lfo3B.initialise("square", 0.25, defaultLFOAmplitude, createVector(this.column3, this.row3), this.buttonSize);
        this.lfo4B = new LFO();
        this.lfo4B.initialise("triangle", 0.5, defaultLFOAmplitude, createVector(this.column3, this.row4), this.buttonSize);

        this.lfosB.push(this.lfo1B, this.lfo2B, this.lfo3B, this.lfo4B);

        this.soundFilter1 = new SoundFilter();
        this.soundFilter1.initialise("highpass", defaultFilterFrequency, 0, createVector(this.column4, this.row1), this.buttonSize);
        this.soundFilter2 = new SoundFilter();
        this.soundFilter2.initialise("bandpass", defaultFilterFrequency, 0, createVector(this.column4, this.row2), this.buttonSize);
        this.soundFilter3 = new SoundFilter();
        this.soundFilter3.initialise("lowpass", defaultFilterFrequency, 0, createVector(this.column4, this.row3), this.buttonSize);
        this.soundFilter4 = new SoundFilter();
        this.soundFilter4.initialise("lowpass", defaultFilterFrequency, 0, createVector(this.column4, this.row4), this.buttonSize);

        this.filters.push(this.soundFilter1, this.soundFilter2, this.soundFilter3, this.soundFilter4);

        this.activeSource = this.soundSource3;
        this.activeLFOA = this.lfo3A;
        this.activeLFOB = this.lfo4B;
        this.activeFilter = this.soundFilter3;

        this.rack = new Rack(this.rackWidth, this.rackHeight, this.activeSource);

        this.rack.updateRack(this.activeSource, this.activeLFOA, this.activeLFOB, this.activeFilter);

        this.startAll();
        this.mute();
        
    }

    this.draw = function() {
        this.rack.draw();
            for (let s of this.sources) {
                s.draw();
            }

            for (let f of this.filters) {
                f.draw();
            }

            for (let l of this.lfosA) {
                l.draw();
            }

            for (let l of this.lfosB) {
                l.draw();
            }

            this.rack.drawConnections();
            this.button.draw();
    }

    this.startAll = function () {
        for (let s of this.sources) {
            s.start();
        }

        for (let l of this.lfosA) {
            l.start();
        }

        for (let l of this.lfosB) {
            l.start();
        }
    }

    this.stopAll = function () {
        for (let s of this.sources) {
            s.stop();
        }

        for (let l of this.lfosA) {
            l.stop();
        }

        for (let l of this.lfosB) {
            l.stop();
        }
    }

    this.mute = function () {
        for (let s of this.sources) {
            s.setAmplitude(0);
        }
    }

    this.unmute = function () {
        for (let s of this.sources) {
            if (s.type == "square" || s.type == "sawtooth"){
            s.setAmplitude(0.1);
            } else {
                s.setAmplitude(0.3);
            }
        }
    }

}