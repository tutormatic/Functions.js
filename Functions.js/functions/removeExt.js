/*
removeExt is to remove an extension like ".exe" manually.
*/

String.prototype.removeExt = function(extension) {
    if (extension && extension.startsWith('.') && this.endsWith(extension)) {
      return this.slice(0, -extension.length);
    }
    return this.toString();
}

module.exports = String;