import { initDatabase } from './db';
import { initServer } from './server';

import { EnvConstants } from '../consts/env';

export async function initApp(): Promise<void> {
  try {
    await initDatabase();
  } catch (error) {
    console.log('database connection failed with error', error);

    // stop server
    throw error;
  }

  initServer(EnvConstants.PORT);
}
