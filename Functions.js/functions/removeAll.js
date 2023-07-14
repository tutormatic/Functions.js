/*
removeAll is to remove a part of a string but it will remove all those parts.
*/

String.prototype.removeAll = function(value) {
    return this.replaceAll(value, "");
}

module.exports = String;