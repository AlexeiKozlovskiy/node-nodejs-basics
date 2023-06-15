import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const calculateHash = async () => {
  const file = 'fileToCalculateHashFor.txt';
  const sourse = 'files';

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, sourse, file);

  const content = await readFile(filePath);
  const data = createHash('sha256').update(content).digest('hex');

  console.log(data);
};

await calculateHash();
