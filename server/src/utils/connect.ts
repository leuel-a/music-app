import mongoose from 'mongoose';
import config from 'config';

import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    logger.info('Connected to the database');
  } catch (err) {
    logger.error('Error connecting to the database', err);
    process.exit(1);
  }
}


export default connect;
