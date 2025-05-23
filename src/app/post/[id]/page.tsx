import { AuthorAvatar } from '@/app/components/AuthorAvatar';
import PostComments from '@/app/components/PostComments';
import { calculateReadingTime } from '@/lib/utils';
import { JSX } from 'react';

export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
}

type Params = Promise<{ id: string }>;

export default async function PostPage(props: { params: Params }): Promise<JSX.Element> {
  const params = await props.params;

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) =>
    res.json()
  );

  const user = post?.userId
    ? await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) =>
        res.json()
      )
    : null;

  return (
    <section className='flex flex-col gap-6 items-center text-center bg-gray-100 min-h-screen w-full p-2 sm:p-10'>
      <div className='flex flex-col gap-2 p-4 sm:p-10 border-[1px] border-gray-200 bg-white rounded-2xl w-full'>
        <p className='text-sm text-gray-500'>{calculateReadingTime(post.body)} min read</p>
        <h1 className='text-2xl font-bold capitalize'>{post.title}</h1>
        <h3 className='text-gray-700'>{post.body}</h3>
      </div>

      <AuthorAvatar user={user} post={post} />

      <PostComments postId={post.id} />
    </section>
  );
}
