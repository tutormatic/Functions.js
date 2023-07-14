/*
This is to removeAll the characters in a string.
*/

String.prototype.removeChars = function() {
    const noChars = this.replace(/[A-Za-z]/g, "");
    return noChars;
}

module.exports = String;