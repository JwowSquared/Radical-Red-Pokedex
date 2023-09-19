let repo = "JwowSquared/JwowSquared.github.io";
let version = "rrdex release 1.0.6";

let species = null;
let sprites = null;
let abilities = null;
let moves = null;
let locations = null;
let types = null;
let caps = null;
let eggGroups = null;
let items = null;
let regions = null;

let splits = {
	"SPLIT_PHYSICAL": {"name": "Physical", "color": "#f75231"},
	"SPLIT_SPECIAL": {"name": "Special", "color": "#5273ad"},
	"SPLIT_STATUS": {"name": "Status", "color": "#ada594"}
};

let trackers = {};
let filters = {};

function colorGradient(fadeFraction, rgbColor1, rgbColor2, rgbColor3) {
    var color1 = rgbColor1;
    var color2 = rgbColor2;
    var fade = fadeFraction;

    // Do we have 3 colors for the gradient? Need to adjust the params.
    if (rgbColor3) {
      fade = fade * 2;

      // Find which interval to use and adjust the fade percentage
      if (fade >= 1) {
        fade -= 1;
        color1 = rgbColor2;
        color2 = rgbColor3;
      }
    }

    var diffRed = color2.red - color1.red;
    var diffGreen = color2.green - color1.green;
    var diffBlue = color2.blue - color1.blue;

    var gradient = {
      red: parseInt(Math.floor(color1.red + (diffRed * fade)), 10),
      green: parseInt(Math.floor(color1.green + (diffGreen * fade)), 10),
      blue: parseInt(Math.floor(color1.blue + (diffBlue * fade)), 10),
    };

    return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
}