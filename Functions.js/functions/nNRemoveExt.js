String.prototype.nNRemoveExt = function() {
    const lastDotIndex = this.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      return this.substring(0, lastDotIndex);
    }
    return this.toString();
}

module.exports = String;