/*
This is to remove all the numbers from a string.
*/

String.prototype.removeNum = function() {
    const noNum = this.replace(/[0-9]/g, "");
    return noNum;
}

module.exports = String;