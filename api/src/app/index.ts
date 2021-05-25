import { initDatabase } from './db';
import { initServer } from './server';

// TODO: move to .env file
const PORT = 3000;

export async function initApp(): Promise<void> {
  try {
    await initDatabase();
  } catch (error) {
    console.log('database connection failed with error', error);

    // stop server
    throw error;
  }

  initServer(PORT);
}
