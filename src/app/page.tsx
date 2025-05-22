import PostsList from './components/PostsList';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className='flex flex-col gap-6 bg-gray-100 min-h-screen w-full p-10 items-start'>
      <PostsList initialPosts={posts} />
    </main>
  );
}
