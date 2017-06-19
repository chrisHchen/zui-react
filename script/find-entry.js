const Glob = require('glob');
const path = require('path');

module.exports = function() {
  const entries = {};
  const partten = path.join(__dirname, '../src/**/*.js');
  try {
    Glob.sync(partten, {}).forEach((file) => {
      const folderName = path.basename(file, '.js');
      entries[folderName] = file;
    });
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
