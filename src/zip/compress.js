import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const sourseFile = 'fileToCompress.txt';
  const sourse = 'files';
  const endFile = 'archive.gz';

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const sourseFilePath = path.join(__dirname, sourse, sourseFile);
  const endFilePath = path.join(__dirname, sourse, endFile);

  const readableStream = createReadStream(sourseFilePath);
  const writebleStream = createWriteStream(endFilePath);
  const zipStream = createGzip();

  await pipeline(readableStream, zipStream, writebleStream);
};

await compress();
