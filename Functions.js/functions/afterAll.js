/*
afterAll is to add something after all decided string.
*/

String.prototype.afterAll = function(every, add) {
    const reg = new RegExp(`\\${every}`, "g");
    return this.replace(reg, `${every}${add}`);
}
  
module.exports = String;