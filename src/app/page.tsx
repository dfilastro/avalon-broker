import PostsList from './components/PostsList';
import { Post } from '@/lib/types';
import { JSX } from 'react';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

  return res.json();
}

export default async function HomePage(): Promise<JSX.Element> {
  const posts = await getPosts();

  return (
    <main className='flex flex-col gap-6 bg-gray-100 min-h-screen w-full p-4 sm:p-10 items-start'>
      <PostsList initialPosts={posts} />
    </main>
  );
}
