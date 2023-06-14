import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'path';
import { __dirname, errorMessage, folderSourse } from './utils.js';

const copy = async () => {
  const folderEnd = 'files_copy';
  const folderSoursePath = path.join(__dirname, folderSourse);
  const folderEndPath = path.join(__dirname, folderEnd);

  try {
    await mkdir(folderEndPath);
    const files = await readdir(folderSoursePath);
    await Promise.all(
      files.map((el) =>
        copyFile(`${folderSoursePath}/${el}`, `${folderEndPath}/${el}`)
      )
    );
  } catch (err) {
    throw new Error(errorMessage);
  }
};

copy();
