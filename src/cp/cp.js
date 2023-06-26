import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const file = 'script.js';
  const folder = 'files';
  const filePath = join(dirname(fileURLToPath(import.meta.url)), folder, file);

  fork(filePath, args);
};

spawnChildProcess(['1', '10', '5555']);
