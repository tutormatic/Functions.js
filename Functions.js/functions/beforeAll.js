/*
beforeAll is to add something before all decided string.
*/

String.prototype.beforeAll = function(every, add) {
    const reg = new RegExp(`\\${every}`, "g");
    return this.replace(reg, `${add}${every}`);
}

module.exports = String;