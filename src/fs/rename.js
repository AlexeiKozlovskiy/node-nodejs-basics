import { rename as renameFile } from 'fs/promises';
import { __dirname, errorMessage, folderSourse } from './utils.js';
import path from 'path';

const rename = async () => {
  const wrongName = 'wrongFilename.txt';
  const rightName = 'properFilename.md';
  const wrongNamePath = path.join(__dirname, folderSourse, wrongName);
  const rightNamePath = path.join(__dirname, folderSourse, rightName);

  try {
    await renameFile(wrongNamePath, rightNamePath);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await rename();
