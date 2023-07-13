const { createCanvas } = require('canvas');

function createCan(width, height, callback) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    callback(canvas, context);
}

module.exports = createCan;