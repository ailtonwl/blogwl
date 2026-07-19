import { findAllPublicPostsCached } from '@/lib/post/queries/public';
import { CodeXmlIcon } from 'lucide-react';
import ErrorMessage from '../ErrorMessage';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle='Ops 😅'
        content='Ainda não criamos nenhum post.'
      />
    );

  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <>
      <div className='flex py-4 px-6 mb-6 pt-24 text-md text-gray-700 bg-gray-100 border-b border-gray-200'>
        <div>
          <CodeXmlIcon className='mr-2 w-6 h-6 text-red-700' />
        </div>
        <div>
          Resulth ATS, o software <b>ERP</b> que{' '}
          <b>descomplica a gestão da sua empresa</b>. Com ele, você tem controle
          total sobre suas operações, desde o estoque até as finanças, tudo em
          um só lugar. Experimente agora e veja como é fácil gerenciar seu
          negócio com eficiência e precisão.
        </div>
      </div>
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: postLink,
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: post.coverImageUrl,
            alt: post.title,
            priority: true,
          }}
        />

        <PostSummary
          postLink={postLink}
          postHeading='h1'
          createdAt={post.createdAt}
          excerpt={post.excerpt}
          title={post.title}
        />
      </section>
    </>
  );
}
