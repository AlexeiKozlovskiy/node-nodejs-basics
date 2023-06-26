import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

export const errorMessage = 'FS operation failed';
export const folderSourse = 'files';
export const __dirname = dirname(fileURLToPath(import.meta.url));
