/*
loadJsonFile is to load a Json file faster and easier so you can use it.
*/

const fs = require("fs");

function loadJsonFile(file, removeComments) {
  const fileContent = fs.readFileSync(file, "utf8");

  if (removeComments === true) {
    const sanitizedContent = fileContent.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    return JSON.parse(sanitizedContent);
  }

  return JSON.parse(fileContent);
}

module.exports = loadJsonFile;