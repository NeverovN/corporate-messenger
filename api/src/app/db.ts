import mongoose from 'mongoose';

const ADMIN_USERNAME = 'cirkul';
const ADMIN_PASSWORD = 'gncirkul14';
const DATABASE_NAME = 'CorporateMessenger';

// TODO: move mongodb url & credentials into .env files
export async function initDatabase(): Promise<void> {
  await mongoose.connect(
    `mongodb+srv://${ADMIN_USERNAME}:${ADMIN_PASSWORD}@messengercluster.zam9m.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
}
