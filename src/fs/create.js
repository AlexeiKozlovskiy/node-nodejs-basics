import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const content = 'I am fresh and young';
  const errorMessage = 'FS operation failed';
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
