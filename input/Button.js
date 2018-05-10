function Button(grid, active, x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.grid = grid;
    this.active = active;

    this.draw = function () {

        fill(BUTTONOFF_COLOUR);
        rect(this.x, this.y, this.size, this.size);

        if (this.active) {
            fill(BUTTONON_COLOUR);
            rect(this.x, this.y, this.size / 1.2, this.size / 1.2);
        }
    }

    this.clicked = function (distance) {
        if (distance < this.size / 2) {
            this.update();
        }
    }

    this.update = function () {
        if (this.active) {
            this.active = false;
            this.grid.stopAll();
        } else {
            this.active = true;
            this.grid.startAll();
        }
    }
}