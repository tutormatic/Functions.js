/*
before is to add something before the first string decided.
*/

String.prototype.before = function(every, add) {
    const reg = new RegExp(`\\${every}`);
    return this.replace(reg, `${add}${every}`);
}
  
module.exports = String;