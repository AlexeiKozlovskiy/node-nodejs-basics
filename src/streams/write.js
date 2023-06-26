import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createWriteStream } from 'fs';
import { stdin, stdout } from 'process';

const write = async () => {
  const file = 'fileToWrite.txt';
  const sourse = 'files';

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, sourse, file);

  const stream = createWriteStream(filePath);
  stdout.write('Input your data\nCtrl+C for exit\n');
  stdin.on('data', (data) => stream.write(data));
};

await write();
