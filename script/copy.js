/* eslint-disable no-console */
import path from 'path';
import fs from 'fs-extra';

fs.readFile(path.join(__dirname, '../package.json'), (err, data) => {
  if (!err) {
    try {
      const jsonData = JSON.parse(data);
      jsonData.main = './index.js';
      const releaseData = JSON.stringify(jsonData, null, 2);
      fs.writeFile(path.join(__dirname, '../build/package.json'), releaseData);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(err);
  }
});
