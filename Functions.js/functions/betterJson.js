/*
betterJson will make your Json code much easier to read.
*/

function betterJson(json) {
    return JSON.stringify(JSON.parse(json), null, 2);
}

module.exports = betterJson;