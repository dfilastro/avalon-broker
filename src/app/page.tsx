import { Suspense } from 'react';
import PostsList from './components/PostsList';

export const dynamic = 'force-static';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <section className='flex flex-col gap-6 bg-gray-100 min-h-screen w-full p-10 items-start'>
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostsList initialPosts={posts} />
      </Suspense>
    </section>
  );
}
