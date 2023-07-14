/*
addExt is a function to add an extension to a string like ".exe".
*/

String.prototype.addExt = function(value) {
    return this + value;
}

module.exports = String;