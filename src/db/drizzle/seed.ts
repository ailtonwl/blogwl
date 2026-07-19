import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable).execute();
    await drizzleDb.insert(postsTable).values(posts);
    console.log('posts', posts);
  } catch (error) {
    console.log('================================');
    console.error('Error inserting posts:', error);
    console.log('================================');
  }
})();
