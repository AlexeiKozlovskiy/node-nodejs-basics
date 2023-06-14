import { __dirname, errorMessage, folderSourse } from './utils.js';
import path from 'path';
import { rm } from 'node:fs/promises';

const remove = async () => {
  const removeFile = 'fileToRemove.txt';
  const removeFilePath = path.join(__dirname, folderSourse, removeFile);

  try {
    await rm(removeFilePath);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
