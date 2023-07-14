/*
after is to add something after the first string decided.
*/

String.prototype.after = function(every, add) {
    const reg = new RegExp(`\\${every}`);
    return this.replace(reg, `${every}${add}`);
}
  
module.exports = String;