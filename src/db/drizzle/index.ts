import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { postsTable } from './schemas';

export const drizzleDb = drizzle(process.env.DATABASE_URL!, {
  schema: {
    posts: postsTable,
  },
  logger: false,
});
