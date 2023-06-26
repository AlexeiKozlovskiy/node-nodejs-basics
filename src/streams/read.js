import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createReadStream } from 'fs';

const read = async () => {
  const file = 'fileToRead.txt';
  const sourse = 'files';

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, sourse, file);

  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();
