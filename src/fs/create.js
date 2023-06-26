import { writeFile } from 'node:fs/promises';
import path from 'path';
import { __dirname, errorMessage, folderSourse } from './utils.js';

const create = async () => {
  const content = 'I am fresh and young';
  const fileName = 'fresh.txt';
  const folderPath = path.join(__dirname, folderSourse, fileName);

  try {
    await writeFile(folderPath, content, { flag: 'wx' });
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await create();
