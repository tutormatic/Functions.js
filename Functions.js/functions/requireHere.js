const { exec } = require('child_process');

function isPackageInstalled(packageName) {
  try {
    require.resolve(packageName);
    return true;
  } catch (error) {
    return false;
  }
}

function installPackage(packageName) {
  return new Promise((resolve, reject) => {
    const installProcess = exec(`npm install ${packageName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });

    installProcess.stdout.pipe(process.stdout);
    installProcess.stderr.pipe(process.stderr);
  });
}

async function requireHere(packageName, callback) {
  if (!isPackageInstalled(packageName)) {
    try {
      console.log(`Installing package: ${packageName}`);
      await installPackage(packageName);
      console.log(`Package '${packageName}' installed successfully.`);
    } catch (error) {
      console.error(`Failed to install package '${packageName}': ${error.message}`);
      return;
    }
  }

  try {
    const requiredModule = require(packageName);
    if (typeof callback === 'function') {
      callback(requiredModule);
    } else {
      console.error('Callback is not a function.');
    }
  } catch (error) {
    console.error(`Failed to require module '${packageName}': ${error.message}`);
  }
}

module.exports = requireHere;