import { Comment } from '@/lib/types';
import Image from 'next/image';

export default async function PostComments({ postId }: { postId: number }) {
  const comments: Comment[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((res) => res.json());

  return (
    <div className='flex flex-col gap-2 w-full'>
      <p className='font-bold uppercase text-left'>Comments</p>
      {comments.map((comment) => {
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
  );
}
