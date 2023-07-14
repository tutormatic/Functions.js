/*
color is to add color to your string.
*/

String.prototype.color = function(colorName) {
    const textColors = {
        reset: '\x1b[0m',
        bold: '\x1b[1m',
        dim: '\x1b[2m',
        italic: '\x1b[3m',
        underline: '\x1b[4m',
        blink: '\x1b[5m',
        reverse: '\x1b[7m',
        hidden: '\x1b[8m',
        strikethrough: '\x1b[9m',
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        pink: '\x1b[38;5;206m',
        lightBlack: '\x1b[90m',
        lightRed: '\x1b[91m',
        lightGreen: '\x1b[92m',
        lightYellow: '\x1b[93m',
        lightBlue: '\x1b[94m',
        lightMagenta: '\x1b[95m',
        lightCyan: '\x1b[96m',
        lightWhite: '\x1b[97m'
    };
  
    const colorCode = textColors[colorName] || textColors.reset;
    return `${colorCode}${this}${textColors.reset}`;
};

module.exports = String;