import { AuthorAvatar } from '@/app/components/AuthorAvatar';
import PostsList from '@/app/components/PostsList';

export async function generateStaticParams() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return users.map((user: any) => ({
    id: user.id.toString(),
  }));
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const [user, posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res) => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`).then((res) =>
      res.json()
    ),
  ]);

  console.log(user);
  return (
    <div className='flex flex-col gap-6 bg-gray-100 min-h-screen w-full p-10 items-start'>
      <AuthorAvatar user={user} post={posts} large />

      <PostsList initialPosts={posts} />
    </div>
  );
}
