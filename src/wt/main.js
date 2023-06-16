import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const fileWorker = 'worker.js';
  const fileWorkerPath = join(
    dirname(fileURLToPath(import.meta.url)),
    fileWorker
  );
  let number = 10;

  const resultWorkers = await Promise.allSettled(
    cpus().map(() => {
      return new Promise((resolve, rejects) => {
        const worker = new Worker(fileWorkerPath, { workerData: number++ });
        worker.on('message', (message) => {
          resolve(message);
        });
        worker.on('error', (message) => {
          rejects(message);
        });
      });
    })
  );

  const result = resultWorkers.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(result);
  return result;
};

await performCalculations();
