import path from 'path';
import { __dirname, errorMessage, folderSourse } from './utils.js';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const fileName = 'fileToRead.txt';
  const fileNamePath = path.join(__dirname, folderSourse, fileName);

  try {
    console.log(await readFile(fileNamePath, 'utf-8'));
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await read();
