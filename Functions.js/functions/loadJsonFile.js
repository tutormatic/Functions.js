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