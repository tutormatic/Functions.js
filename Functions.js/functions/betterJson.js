function betterJson(json) {
    return JSON.stringify(JSON.parse(json), null, 2);
}

module.exports = betterJson;