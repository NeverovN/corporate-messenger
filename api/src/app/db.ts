import mongoose from 'mongoose';

import { EnvConstants } from '../consts/env';

// TODO: move mongodb url & credentials into .env files
export async function initDatabase(): Promise<void> {
  await mongoose.connect(EnvConstants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
