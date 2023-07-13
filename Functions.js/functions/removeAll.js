String.prototype.removeAll = function(value) {
    return this.replaceAll(value, "");
}

module.exports = String;