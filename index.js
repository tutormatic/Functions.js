const funcjs = require("./Functions.js/all");

const name = funcjs.prompt("what is your name?\n");
console.log(`Hey ${name.color("green")}, welcome to Functions.js!`);