const readlineSync = require('readline-sync');

function prompt(question) {
    return readlineSync.question(question);
}

module.exports = prompt;