const fs = require('fs')
const path = require(
	'path'
)

function fileExists(directory, pattern) {
  const regex = new RegExp(`^${pattern}$`);
  return fs.promises.readdir(directory)
    .then(files => files.find(file => regex.test(file)))
    .catch(() => false);
}

function waitForFile(directory, pattern, renameTo, timeoutMs, checkIntervalMs  = 500) {
  return new Promise((resolve, reject) => {
    const endTime = Date.now() + timeoutMs;

    const checkFile = async () => {
      const file = await fileExists(directory, pattern);
      if (file) {
		await fs.promises.rename(directory + path.sep + file, directory + path.sep + renameTo)
        resolve(file);
      } else if (Date.now() >= endTime) {
        reject(new Error('Timeout: File did not appear within the specified time'));
      } else {
        setTimeout(checkFile, checkIntervalMs);
      }
    };
    checkFile();
  });
}

module.exports = { waitForFile, fileExists };
