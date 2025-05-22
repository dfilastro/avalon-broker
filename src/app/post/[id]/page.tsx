import { AuthorAvatar } from '@/app/components/AuthorAvatar';
import { calculateReadingTime } from '@/lib/utils';
import Image from 'next/image';
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

  const [post, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then((res) =>
      res.json()
    ),
  ]);

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

      <div className='flex flex-col gap-2 w-full'>
        <p className='font-bold uppercase text-left'>Comments</p>
        {comments.map((comment: { id: number; body: string; email: string; name: string }) => {
          const commentId = (comment.id % 100) + 1;

          return (
            <div
              key={comment.id}
              className='flex flex-col gap-4 p-5 text-left rounded-lg bg-white border-[1px] border-gray-200 hover:scale-[1.005] transition-all duration-300'
            >
              <div className='flex flex-col gap-2 items-start'>
                <h3 className='capitalize'>{comment.name}</h3>
                <p className='capitalize'>{comment.body}</p>
              </div>

              <div className='flex gap-2'>
                <div className='relative h-6 aspect-square rounded-full overflow-hidden'>
                  <Image
                    fill
                    objectFit='cover'
                    src={`https://avatar.iran.liara.run/public/${commentId}`}
                    alt={comment.email}
                  />
                </div>
                <p className='lowercase'>{comment.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
