import { writeFile } from 'node:fs/promises';
import path from 'path';
import { __dirname, errorMessage } from './utils.js';

const create = async () => {
  const content = 'I am fresh and young';
  const folderName = 'files';
  const fileName = 'fresh.txt';
  const folderPath = path.join(__dirname, folderName, fileName);

  try {
    await writeFile(folderPath, content, { flag: 'wx' });
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await create();
