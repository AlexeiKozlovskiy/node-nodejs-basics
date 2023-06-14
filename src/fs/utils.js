import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const errorMessage = 'FS operation failed';
