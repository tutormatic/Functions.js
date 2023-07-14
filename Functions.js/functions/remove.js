/*
remove is to remove a part of a string.
*/

String.prototype.remove = function(value) {
    return this.replace(value, "");
}

module.exports = String;