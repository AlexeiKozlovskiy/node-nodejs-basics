import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
  const sourseFile = 'archive.gz';
  const sourse = 'files';
  const endFile = 'fileToCompress.txt';

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const sourseFilePath = path.join(__dirname, sourse, sourseFile);
  const endFilePath = path.join(__dirname, sourse, endFile);

  const readableStream = createReadStream(sourseFilePath);
  const writebleStream = createWriteStream(endFilePath);
  const zipStream = createUnzip();

  await pipeline(readableStream, zipStream, writebleStream);
};

await decompress();
