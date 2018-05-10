var initialised = false;

var mixer;
var grids = [];

var activeObject;

const lowestOscFreq = 0;
const highestOscFreq = 500;
const lowestLFOFreq = 0;
const highestLFOFreq = 5;
const lowestResonance = -12;
const highestResonance = 12;

function initialise() {

    if (!initialised) {

        for (var i = 0; i < 4; i++){
            let grid = new Grid();
            grid.initialise(false, i * 450);
            grids.push(grid);
        }

        activeObject = grids[0].activeFilter;

        mixer = new Mixer((windowHeight / 5) * 4, 100);

        mixer.updateMixer(activeObject);

        initialised = true;
        console.log("Initialised");
    }
}


function checkAudioContext() {
    getAudioContext().resume().then(() => {
        initialise();
    });
}