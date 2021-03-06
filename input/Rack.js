function Rack(width, height) {
    this.width = width;
    this.height = height;
    this.source;
    this.lfoA;
    this.lfoB;
    this.filter;

    this.updateRack = function (source, lfoA, lfoB, filt) {

        if (this.source || this.lfoA || this.lfoB) {
            this.source.getOscillator().disconnect();
            this.lfoA.getOscillator().disconnect();
            this.lfoB.getOscillator().disconnect();
        }

        this.source = source;
        this.lfoA = lfoA;
        this.lfoB = lfoB;
        this.filter = filt;

        this.source.getOscillator().disconnect();
        this.lfoA.getOscillator().disconnect();
        this.lfoB.getOscillator().disconnect();
        this.source.connectTo(this.filter.getFilter());
        this.filter.connectFrequencyTo(this.lfoA.getOscillator());
        this.filter.connectFrequencyTo(this.lfoB.getOscillator());
    }

    this.draw = function () {
        // rectMode(CORNER);
        // rect(0, 0, this.width, this.height);
    }

    this.drawConnections = function () {
        stroke(ACTIVE_COLOUR);
        fill(ACTIVE_COLOUR);
        strokeWeight(4);
        ellipse(this.source.position.x, this.source.position.y, this.source.size / 4, this.source.size / 4);
        line(this.source.position.x, this.source.position.y, this.lfoA.position.x, this.lfoA.position.y);
        ellipse(this.lfoA.position.x, this.lfoA.position.y, this.lfoA.size / 4, this.lfoA.size / 4);
        line(this.lfoA.position.x, this.lfoA.position.y, this.lfoB.position.x, this.lfoB.position.y);
        ellipse(this.lfoB.position.x, this.lfoB.position.y, this.lfoB.size / 4, this.lfoB.size / 4);
        line(this.lfoB.position.x, this.lfoB.position.y, this.filter.position.x, this.filter.position.y);
        ellipse(this.filter.position.x, this.filter.position.y, this.filter.size / 4, this.filter.size / 4);
        noStroke();
    }
}