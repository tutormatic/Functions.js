String.prototype.removeNum = function() {
    const noNum = this.replace(/[0-9]/g, "");
    return noNum;
}

module.exports = String;