/*
exeCmd is to execute simple and easy commands in the console.
*/

const { execSync } = require("child_process");

function exeCmd(cmd) {
  try {
    return execSync(cmd).toString();
  } catch (error) {
    return error;
  }
}

module.exports = exeCmd;