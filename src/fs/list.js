import { __dirname, errorMessage, folderSourse } from './utils.js';
import path from 'path';
import { readdir } from 'node:fs/promises';

const list = async () => {
  const folderFiles = path.join(__dirname, folderSourse);

  try {
    console.log(await readdir(folderFiles));
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await list();
