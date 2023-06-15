import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { stdout } from 'process';

const transform = async () => {
  const transformedContent = new Transform({
    transform(chunk, encoding, callback) {
      const reverseContent = chunk.toString().split('').reverse().join('');
      callback(null, `${reverseContent}\n`);
    },
  });
  stdout.write('Input your data\nCtrl+C for exit\n');
  await pipeline(process.stdin, transformedContent, process.stdout);
};

await transform();
